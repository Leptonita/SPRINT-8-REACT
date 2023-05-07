import { useEffect, useState } from "react";
//import axios from "axios";
import debounce from 'lodash/debounce';
import ItemListShips from "../components/ItemListShips";
import Loading from "../components/Loading";
import { getShips } from "../services/getShips";
import { DivListIndex, ButtonMore } from "./ListIndex-styled";

//const instance = axios.create({ baseURL: 'https://swapi.dev/api/starships' });

function ListIndex() {
    const [spaceShips, setSpaceShips] = useState([]);
    const [status, setStatus] = useState(200);
    const [total, setTotal] = useState(0);
    const [isDownloading, setIsDownloading] = useState(false);
    const [page, setPage] = useState(1);

    const handleScroll = (e, total) => {
        const doc = e.target.documentElement;
        //we reach the end of the scroll when:
        if (doc.scrollTop + window.innerHeight + 1 >= doc.scrollHeight) {
            const newPage = page + 1;
            setPage(newPage);


            if (status === 200 && newPage <= total && !isDownloading) {
                setIsDownloading(true);
                console.log({ total }, { page: newPage });
                getShips(newPage)
                    .then(res => {
                        const newSpaceShips = res.data.results;
                        setSpaceShips((oldSpaceShips) => [...oldSpaceShips, ...newSpaceShips]);

                    })
                    .catch(error => { // error is handled in catch block
                        if (error.response) { // status code out of the range of 2xx
                            console.log("Data :", error.response.data);
                            console.log("Status :" + error.response.status);
                            setStatus(error.response.status)
                        } else if (error.request) { // The request was made but no response was received
                            console.log("error request 2", error.request);
                        } else {// Error on setting up the request
                            console.log('Error setting', error.message);
                        }
                    }).finally(() => setIsDownloading(false))
            };
        }
    }

    useEffect(() => {
        getShips(page)
            .then(res => {
                const total = Math.round(res.data.count / 10);
                setSpaceShips(res.data.results);
                setTotal(total);

            })
            .catch(err => console.log('error', err.message))
        //window.addEventListener('scroll', handleScroll);

        /* axios
            .get('https://swapi.dev/api/starships/')
            .then(res => {
                console.log('space ships', res)
                setSpaceShips(res.data.results)
            })
            .catch(err => console.log('error', err.message)) */
    }, [])

    useEffect(() => {
        const onScroll = debounce((e) => handleScroll(e, total), 1000);
        if (total && !isDownloading && page !== total) {
            window.addEventListener('scroll', onScroll);
        }
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [total, isDownloading])

    const listShips = spaceShips.map((ship) => {
        //get the id from the url of each ship
        const splitUrl = ship.url.split("/");
        const id = splitUrl[splitUrl.length - 2];
        //console.log({ id });
        return <ItemListShips key={id} name={ship.name} model={ship.model} id={id} />

    })

    return (
        <DivListIndex>

            {spaceShips.length === 0
                ? <Loading />
                : <ul>{listShips}</ul>
            }

        </DivListIndex>
    );
}

export default ListIndex;
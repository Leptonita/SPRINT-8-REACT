import { useEffect, useState } from "react";
//import axios from "axios";
import ItemListShips from "../components/ItemListShips";
import Loading from "../components/Loading";
import { getShips } from "../services/getShips";


//const instance = axios.create({ baseURL: 'https://swapi.dev/api/starships' });

function ListIndex() {
    const [spaceShips, setSpaceShips] = useState([]);
    const [status, setStatus] = useState(200);
    //const [page, setPage] = useState(1);

    let page = 1;

    const handleScroll = (e, total) => {
        const doc = e.target.documentElement;
        //we reach the end of the scroll when:
        if (doc.scrollTop + window.innerHeight + 1 >= doc.scrollHeight) {
            console.log('end scroll, going for the next page');
            //setPage((oldPage) => (oldPage <= total) ? oldPage + 1 : total);

            page++;
            if (status === 200 && page <= total) {

                console.log({ total }, { page });

                getShips(page)
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
                    })
            };
        }
    }

    useEffect(() => {
        getShips(page)
            .then(res => {
                console.log('space ships', res)
                const total = Math.round(res.data.count / 10);
                setSpaceShips(res.data.results);
                window.addEventListener('scroll', (e) => handleScroll(e, total));
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

    const listShips = spaceShips.map((ship) => {
        //get the id from the url of each ship
        const id = ship.url.substr(-3).replaceAll("/", "");
        console.log({ id });
        return <ItemListShips key={id} name={ship.name} model={ship.model} id={id} />

    })

    return (
        <div>

            {spaceShips.length === 0
                ? <Loading />
                : <ul>{listShips}</ul>
            }
            <button>view more</button>
        </div>
    );
}

export default ListIndex;
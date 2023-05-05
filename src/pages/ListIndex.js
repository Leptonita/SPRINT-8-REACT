import { useEffect, useState } from "react";
import axios from "axios";
import ItemListShips from "../components/ItemListShips";
import Loading from "../components/Loading";
import { DivListIndex, ButtonMore } from "./ListIndex-styled";

import { useMyContext } from '../application/Provider';

function ListIndex() {
    const [state, setState] = useMyContext();
    const [spaceShips, setSpaceShips] = useState([]);
    const [status, setStatus] = useState(200);

    const [fetchedNextPage, setFetchedNextPage] = useState(null)

    const loadMore = () => {
        console.log({ fetchedNextPage });
        if (status === 200 && fetchedNextPage !== null) {
            //axios getting another page of data to add to the array of spaceShips
            axios
                .get(fetchedNextPage)
                .then(res => {
                    const newSpaceShips = res.data.results;
                    setSpaceShips((oldSpaceShips) => [...oldSpaceShips, ...newSpaceShips]);
                    setFetchedNextPage(res.data.next);
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


    useEffect(() => {

        axios
            .get('https://swapi.dev/api/starships/')
            .then(res => {
                console.log('space ships', res);
                setSpaceShips(res.data.results);
                setFetchedNextPage(res.data.next);
            })
            .catch(err => console.log('error', err.message));

    }, [])

    const listShips = spaceShips.map((ship) => {
        //get the id from the url of each ship
        const splitUrl = ship.url.split("/");
        const id = splitUrl[splitUrl.length - 2];
        //console.log({ id });
        return <ItemListShips key={id} name={ship.name} model={ship.model} id={id} />
    })

    console.log('desde ListIndex', state.user);
    return (
        <DivListIndex>

            {spaceShips.length === 0
                ? <Loading />
                : <ul>{listShips}</ul>
            }
            {fetchedNextPage !== null && <ButtonMore onClick={loadMore}>view more</ButtonMore>}
        </DivListIndex>
    );
}

export default ListIndex;
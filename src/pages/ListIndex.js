import { useEffect, useState } from "react";
import axios from "axios";
import ItemListShips from "../components/ItemListShips";
import Loading from "../components/Loading";


//const instance = axios.create({ baseURL: 'https://swapi.dev/api/starships' });

function ListIndex() {
    const [spaceShips, setSpaceShips] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/starships/')
            .then(res => {
                console.log('space ships', res)
                setSpaceShips(res.data.results)
            })
            .catch(err => console.log('error', err.message))
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
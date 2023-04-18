import { useEffect, useState } from "react";
import axios from "axios";
import ItemListShips from "./components/ItemListShips";
import NavBar from "./components/NavBar";


//const instance = axios.create({ baseURL: 'https://swapi.dev/api/starships' });

function App() {
  const [spaceShips, setSpaceShips] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/starships/?page=1')
      .then(res => {
        console.log('space ships', res)
        setSpaceShips(res.data.results)
      })
      .catch(err => console.log('error', err.message))
  }, [])

  const listShips = spaceShips.map(ship => {
    return <ItemListShips key={ship.name} name={ship.name} model={ship.model} />

  })



  return (
    <div>
      <NavBar />
      <ul>{listShips}</ul>

    </div>
  );
}

export default App;

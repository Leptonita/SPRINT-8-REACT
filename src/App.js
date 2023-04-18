import { useEffect, useState } from "react";
import ItemListShips from "./components/ItemListShips";
import NavBar from "./components/NavBar";

const API_URL = "https://swapi.dev/api/starships/?page=1";

function App() {
  const [spaceShips, setSpaceShips] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((shipsData) => {
        console.log('space ships', shipsData.results)
        setSpaceShips(shipsData.results)
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

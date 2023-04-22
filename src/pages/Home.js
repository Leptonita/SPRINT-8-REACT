import NavBarLogin from '../components/NavBar';
import { DivHome, DivTxt, LinkBtn, ButtonShips } from './Home-styled';
import V19 from '../assets/img/v-19-torrent-16-9.jpeg';


const Home = () => {

    return (
        <>
            <NavBarLogin />

            <DivHome>
                <DivTxt>
                    A long time ago in a galaxy far, far away....
                    <br /><br />
                    starships, also known as  spaceships or spacecraft were a vessel designed for interstellar travels in the Star Wars universe.
                    <br /><br />
                    Welcome to this visual guide of all these epic starships with all their tecnical information available through the Star Wars API.
                    <br /><br />
                    ....May the Force be with you!
                </DivTxt>
                <LinkBtn to="/starships"><ButtonShips>STARSHIPS</ButtonShips></LinkBtn>
            </DivHome>
        </>
    )
}
export default Home;
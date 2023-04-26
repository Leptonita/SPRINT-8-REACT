import NavBarLogin from '../components/NavBar';
import { DivHome, DivTxt, LinkBtn, ButtonShips } from './Home-styled';




const Home = () => {

    return (
        <>
            <NavBarLogin />
            <DivHome>
                <DivTxt>
                    A long time ago in a galaxy far, far away....
                    <br />
                    starships, also known as spaceships, were a vessel designed for interstellar travels in the Star Wars universe.
                    <br /><br />
                    Welcome to this visual guide of all these epic starships available through the Star Wars API.
                    <br /> <br />....May the Force be with you!
                </DivTxt>
                <LinkBtn to="/starships"><ButtonShips>STARSHIPS</ButtonShips></LinkBtn>
                <DivTxt>


                </DivTxt>
            </DivHome>
        </>
    )
}
export default Home;
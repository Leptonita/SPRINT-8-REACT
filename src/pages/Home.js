import NavBarLogin from '../components/NavBar';
import { DivHome, DivTxt, LinkBtn, ButtonShips } from './Home-styled';
import { useMyContext } from '../application/Provider';
import { useState } from 'react';
import Login from '../components/Login';

const Home = () => {
    const [state, setState] = useMyContext();
    const logged = !!state.user;
    //const logged = false;

    const [loginIsClicked, setLoginIsClicked] = useState(!logged);
    const [signupIsClicked, setSignupIsClicked] = useState(!logged);
    const [modalState, setModalState] = useState(!logged);

    const showModalLogin = () => {
        setLoginIsClicked((c) => !c);
        setModalState((m) => !m);
        setSignupIsClicked((c) => !c);
    }

    const showModalSignUp = () => {
        setSignupIsClicked((c) => !c);
        setModalState((m) => !m);
        setLoginIsClicked((c) => !c);
    }

    console.log({ logged })
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
                {logged && <LinkBtn to="/starships"><ButtonShips>STARSHIPS</ButtonShips></LinkBtn>}
                : <Login
                    modalVis={modalState} changeModalVis={setModalState}
                    modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                    modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
                />

            </DivHome >
        </>
    )
}
export default Home;
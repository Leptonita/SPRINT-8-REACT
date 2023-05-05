import NavBarLogin from '../components/NavBar';
import { DivHome, DivTxt, LinkBtn, ButtonShips, Message } from './Home-styled';
import { useMyContext } from '../application/Provider';
import { useState } from 'react';
import Login from '../components/Login';

const Home = () => {
    const [state, setState] = useMyContext();
    const logged = !!state.user;
    //const logged = false;
    //inicializo para las 3 el context (!!state.user) para que se abra la ventana automáticamente si no está logeado.
    //si sólo quiero activar la pantalla de login con boton, entonces los 3 se inicializan en false
    const [loginIsClicked, setLoginIsClicked] = useState(false);
    const [signupIsClicked, setSignupIsClicked] = useState(false);
    const [modalState, setModalState] = useState(false);

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
                    starships were designed for interstellar travels.
                    <br /><br />
                    Welcome to this visual guide of all these epic starships available through the Star Wars API.
                    <br /> <br />{!logged ? <Message>Just log in and enjoy</Message> : "Enjoy && "} ....May the Force be with you!
                </DivTxt>
                {logged ? <LinkBtn to="/starships"><ButtonShips>STARSHIPS</ButtonShips></LinkBtn>
                    : <ButtonShips onClick={showModalSignUp}>START </ButtonShips>}
                {/* :  */}<Login
                    modalVis={modalState} changeModalVis={setModalState}
                    modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                    modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
                />

            </DivHome >
        </>
    )
}
export default Home;
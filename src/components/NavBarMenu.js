import { useMatch } from 'react-router-dom';
import { UlMenu, LiMenu, NavbarLink } from './NavBar-styled';
import { useEffect, useState } from 'react';
import { useMyContext } from '../application/Provider';
import Login from './Login';

const NavBarMenu = () => {
    const [state, setState] = useMyContext();
    const logged = !!state.user;
    const isHome = state.home

    //console.log("state.home", state.home)
    //const logged = false;
    //inicializo para las 3 el context (!!state.user) para que se abra la ventana automáticamente si no está logeado.
    //si sólo quiero activar la pantalla de login con boton, entonces los 3 se inicializan en false
    const [loginIsClicked, setLoginIsClicked] = useState(!logged);
    const [signupIsClicked, setSignupIsClicked] = useState(!logged);
    const [modalState, setModalState] = useState(!logged);

    /* useEffect(() => {
        setModalState(!logged);
    }, []) */

    const showModalLogin = () => {
        setLoginIsClicked((c) => !c);
        setModalState((m) => !m);
        setSignupIsClicked((c) => !c);
    }

    const showModalSignUp = () => {
        setSignupIsClicked((c) => !c);
        setModalState((m) => !m);
        setLoginIsClicked((c) => !c);
        console.log(modalState)
    }


    //console.log({ logged })
    return (
        <>

            <UlMenu>
                <NavbarLink
                    style={{
                        /* borderBottom: useMatch({ path: "/" }) ? "2px solid #fffaded2" : "0px", */
                        boxShadow: useMatch({ path: "/" }) ? "0px -6px 3px -3px #fffadedd inset" : "none",
                        color: useMatch({ path: "/" }) ? "#fffade" : "#b4b4b4",
                        /* display: useMatch({ path: "/" }) ? "none" : "flex" */
                        /* display: logged ? "flex" : "none" */
                    }}
                    to="/">
                    <LiMenu> HOME </LiMenu>
                </NavbarLink>

                <NavbarLink
                    style={{
                        boxShadow: useMatch({ path: "/starships" }) ? "0px -6px 3px -3px #fffadedd inset" : "none",
                        color: useMatch({ path: "/starships" }) ? "#fffade" : "#b4b4b4",
                        /* borderBottom: useMatch({ path: "/starships" }) ? "4px solid #fffaded2" : "0px",
                        display: useMatch({ path: "/" }) ? "none" : "flex" */
                        /*display: logged ? "flex" : "none" */
                    }}
                    to="/starships">
                    <LiMenu> STARSHIPS</LiMenu>
                </NavbarLink>
            </UlMenu >
            {modalState && < Login
                modalVis={modalState} changeModalVis={setModalState}
                modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
            />}
        </>
    )
}
export default NavBarMenu;
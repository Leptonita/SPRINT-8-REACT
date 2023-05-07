import { useState } from 'react';
import { DivHeader } from './NavBar-styled';
import NavBarLogin from './NavBarLogin';
import NavBarMenu from './NavBarMenu';
import { useMyContext } from '../application/Provider';

const NavBar = () => {
    const [state, setState] = useMyContext();
    const logged = !!state.user;

    const [loginIsClicked, setLoginIsClicked] = useState();
    const [signupIsClicked, setSignupIsClicked] = useState();
    const [modalState, setModalState] = useState();

    //loginIsClicked={!logged} signupIsClicked={!logged} modalState={!logged}
    //loginIsClicked={false} signupIsClicked={false} modalState={false}

    return (
        <DivHeader>
            <NavBarLogin
                loginIsClicked={!logged} signupIsClicked={!logged} modalState={!logged}
                setLoginIsClicked={setLoginIsClicked} setSignupIsClicked={setSignupIsClicked}
                setModalState={setModalState}
            />
            <NavBarMenu loginIsClicked={!logged} signupIsClicked={!logged} modalState={!logged} git
                setLoginIsClicked={setLoginIsClicked} setSignupIsClicked={setSignupIsClicked}
                setModalState={setModalState}
            />
        </DivHeader >
    )
}
export default NavBar;
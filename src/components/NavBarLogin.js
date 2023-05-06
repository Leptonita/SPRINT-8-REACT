import { useState } from 'react';
import logo from '../assets/img/sw_logo.webp';
import { DivBarGridLogin, DivImg, LogoImg, DivLoginRight, DivLogin, DivLoginLeft, DivLoginLeftLinks, LinkIds, SpanLogin, MenuMobile, DivUser } from './NavBar-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';

import { useMyContext } from '../application/Provider';

const NavBarLogin = () => {

    const [state, setState] = useMyContext();
    const userLogged = state.user;

    const [isActive, setIsActive] = useState(false);
    const [loginIsClicked, setLoginIsClicked] = useState(false);
    const [signupIsClicked, setSignupIsClicked] = useState(false);
    const [modalState, setModalState] = useState(false);

    const showModalLogin = () => {
        setLoginIsClicked((c) => !c);
        setModalState((m) => !m);
        setSignupIsClicked(false);
    }

    const showModalSignUp = () => {
        setSignupIsClicked((c) => !c);
        setModalState((m) => !m);
        setLoginIsClicked(false);
    }

    return (

        <DivBarGridLogin>
            <DivLoginLeft>
                <MenuMobile>
                    <FontAwesomeIcon onClick={() => { setIsActive(!isActive) }} icon={faBars} size="2xl" style={{ color: "#ffea00", }} />
                </MenuMobile>
                {isActive && (
                    <DivLoginLeftLinks>
                        <br />
                        <p onClick={showModalLogin}><LinkIds>LOGIN</LinkIds> </p>
                        {loginIsClicked &&
                            <Login
                                modalVis={modalState} changeModalVis={setModalState}
                                modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                                modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
                            />}
                        <br />
                        <p onClick={showModalSignUp}><LinkIds>SIGN UP</LinkIds> </p>
                        {signupIsClicked &&
                            <Login
                                modalVis={modalState} changeModalVis={setModalState}
                                modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                                modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
                            />}
                    </DivLoginLeftLinks>
                )}

            </DivLoginLeft>
            <DivImg>
                <LogoImg src={logo} alt="Logo" />
            </DivImg>
            <DivLoginRight>
                <DivLogin>
                    <SpanLogin onClick={showModalLogin}>LOG IN </SpanLogin>
                    {loginIsClicked &&
                        <Login
                            modalVis={modalState} changeModalVis={setModalState}
                            modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                            modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
                        />}

                    <SpanLogin onClick={showModalSignUp}> SIGN UP</SpanLogin>
                    {signupIsClicked &&
                        <Login
                            modalVis={modalState} changeModalVis={setModalState}
                            modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                            modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
                        />}
                </DivLogin>
                <DivUser> {userLogged ? "user: " + userLogged : "no access"}</DivUser>
            </DivLoginRight>
        </DivBarGridLogin>
    )
}
export default NavBarLogin;
import { useEffect, useState } from 'react';
import logo from '../assets/img/sw_logo.webp';
import { DivBarGridLogin, DivImg, LogoImg, DivLogin, DivLoginLeft, DivLoginLeftLinks, LinkIds, SpanLogin, MenuMobile } from './NavBar-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';


const NavBarLogin = () => {

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
    /* const showModal = () => {
         setModalState(!modalState);
     }  */
    //console.log({ loginIsClicked }, { signupIsClicked }, { modalState })
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
        </DivBarGridLogin>
    )
}
export default NavBarLogin;
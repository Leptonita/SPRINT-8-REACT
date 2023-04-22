import { useState } from 'react';
import logo from '../assets/img/sw_logo.webp';
import { DivBarGridLogin, DivImg, LogoImg, DivLogin, DivLoginLeft, DivLoginLeftLinks, SpanLogin, MenuMobile } from './NavBar-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavBarLogin = () => {

    const [isActive, setIsActive] = useState(false);

    return (

        <DivBarGridLogin>
            <DivLoginLeft>
                <MenuMobile>
                    <FontAwesomeIcon onClick={() => { setIsActive(!isActive) }} icon={faBars} size="2xl" style={{ color: "#ffea00", }} />
                </MenuMobile>
                {isActive && (
                    <DivLoginLeftLinks>
                        <p>LOG IN </p>
                        <p> SIGN UP</p>
                    </DivLoginLeftLinks>
                )}

            </DivLoginLeft>
            <DivImg>
                <LogoImg src={logo} alt="Logo" />
            </DivImg>

            <DivLogin>
                <SpanLogin>LOG IN </SpanLogin>
                <SpanLogin> SIGN UP</SpanLogin>
            </DivLogin>

        </DivBarGridLogin>

    )
}
export default NavBarLogin;
import logo from '../assets/img/sw_logo.webp';
import { DivHeader, DivBarGridLogin, LogoImg, SpanLogin, UlMenu, LiMenu, NavbarLink } from './NavBar-styled';
//import { NavLink } from 'react-router-dom';

const NavBarLogin = () => {

    return (
        <DivHeader>
            <DivBarGridLogin>
                <span></span>
                <LogoImg src={logo} alt="Logo" />
                <SpanLogin>LOG IN  ||  SIGN UP</SpanLogin>

            </DivBarGridLogin>
            <UlMenu>
                <LiMenu> <NavbarLink to="/"> HOME </NavbarLink> </LiMenu>
                <LiMenu> <NavbarLink to="/">STARSHIPS</NavbarLink> </LiMenu>

            </UlMenu>
        </DivHeader >
    )
}
export default NavBarLogin;
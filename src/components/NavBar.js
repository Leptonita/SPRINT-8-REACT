import logo from '../sw_logo.webp';
import { DivHeader, DivBarGridLogin, LogoImg, SpanLogin, UlMenu, LiMenu } from './NavBar-styled'

const NavBarLogin = () => {

    return (
        <DivHeader>
            <DivBarGridLogin>
                <span></span>
                <LogoImg src={logo} alt="Logo" />
                <SpanLogin>LOG IN  ||  SIGN UP</SpanLogin>

            </DivBarGridLogin>
            <UlMenu>
                <LiMenu> HOME </LiMenu>
                <LiMenu> STARSHIPS </LiMenu>

            </UlMenu>
        </DivHeader>
    )
}
export default NavBarLogin;
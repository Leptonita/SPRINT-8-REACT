import { useMatch } from 'react-router-dom';
import { UlMenu, LiMenu, NavbarLink } from './NavBar-styled';

const NavBarMenu = () => {

    return (

        <UlMenu>
            <NavbarLink
                style={{
                    borderBottom: useMatch({ path: "/" }) ? "4px solid #0436ead2" : "0px", display: useMatch({ path: "/" }) ? "none" : "flex"
                }}
                to="/">
                <LiMenu> HOME </LiMenu>
            </NavbarLink>

            <NavbarLink
                style={{
                    borderBottom: useMatch({ path: "/starships" }) ? "4px solid #0436ead2" : "0px",
                    display: useMatch({ path: "/" }) ? "none" : "flex"
                }}

                to="/starships">
                <LiMenu> STARSHIPS</LiMenu>
            </NavbarLink>


        </UlMenu>
    )
}
export default NavBarMenu;
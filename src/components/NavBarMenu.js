import { useMatch } from 'react-router-dom';
import { UlMenu, LiMenu, NavbarLink } from './NavBar-styled';

const NavBarMenu = () => {

    return (

        <UlMenu>
            <NavbarLink
                style={{
                    /* borderBottom: useMatch({ path: "/" }) ? "2px solid #fffaded2" : "0px", */
                    boxShadow: useMatch({ path: "/" }) ? "0px -6px 3px -3px #fffadedd inset" : "none",
                    color: useMatch({ path: "/" }) ? "#fffade" : "#b4b4b4"
                    /* display: useMatch({ path: "/" }) ? "none" : "flex" */
                }}
                to="/">
                <LiMenu> HOME </LiMenu>
            </NavbarLink>

            <NavbarLink
                style={{
                    boxShadow: useMatch({ path: "/starships" }) ? "0px -6px 3px -3px #fffadedd inset" : "none",
                    color: useMatch({ path: "/starships" }) ? "#fffade" : "#b4b4b4"
                    /* borderBottom: useMatch({ path: "/starships" }) ? "4px solid #fffaded2" : "0px",
                    display: useMatch({ path: "/" }) ? "none" : "flex" */
                }}

                to="/starships">
                <LiMenu> STARSHIPS</LiMenu>
            </NavbarLink>


        </UlMenu>
    )
}
export default NavBarMenu;
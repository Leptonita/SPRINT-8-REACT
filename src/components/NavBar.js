import { useState } from 'react';
import { DivHeader, UlMenu, LiMenu, NavbarLink } from './NavBar-styled';
import NavBarLogin from './NavBarLogin';
import NavBarMenu from './NavBarMenu';

const NavBar = () => {

    const [isHighlight, setIsHighlight] = useState(false);
    //let resolved = useResolvedPath(to);
    //let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <DivHeader>
            <NavBarLogin />
            <NavBarMenu />
        </DivHeader >
    )
}
export default NavBar;
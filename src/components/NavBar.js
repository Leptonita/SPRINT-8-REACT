import { useState } from 'react';
import { DivHeader, UlMenu, LiMenu, NavbarLink } from './NavBar-styled';
import NavBarLogin from './NavBarLogin';
import NavBarMenu from './NavBarMenu';
import { useMyContext } from '../application/Provider';

const NavBar = () => {
    const [state, setState] = useMyContext();
    const [isHighlight, setIsHighlight] = useState(false);
    //let resolved = useResolvedPath(to);
    //let match = useMatch({ path: resolved.pathname, end: true });
    //console.log('desde NavBar', state.user);
    return (
        <DivHeader>
            <NavBarLogin />
            <NavBarMenu />
        </DivHeader >
    )
}
export default NavBar;
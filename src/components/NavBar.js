import { useState } from 'react';
import { DivHeader, UlMenu, LiMenu, NavbarLink } from './NavBar-styled';
import NavBarLogin from './NavBarLogin';
import NavBarMenu from './NavBarMenu';
import { useMyContext } from '../application/Provider';

const NavBar = () => {
    const [state, setState] = useMyContext();
    const [isHighlight, setIsHighlight] = useState(false);



    return (
        <DivHeader>
            <NavBarLogin />
            <NavBarMenu />
        </DivHeader >
    )
}
export default NavBar;
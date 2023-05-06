import { useState } from 'react';
import { DivHeader } from './NavBar-styled';
import NavBarLogin from './NavBarLogin';
import NavBarMenu from './NavBarMenu';

const NavBar = () => {

    return (
        <DivHeader>
            <NavBarLogin />
            <NavBarMenu />
        </DivHeader >
    )
}
export default NavBar;
import React from 'react';
import "../components_css/NavBar.css";
import Logo from "../Logo-Scrap-480x480.png"
import NavButton from './NavButton';
function NavBar(){


    return(
        <nav className='NavBar'>
            <img src={Logo} style={{height:"60px"}} alt='Logo'/>
            <NavButton name="Sign Up"/>
            <NavButton name="Sign In"/>



        </nav>
    );

}

export default NavBar;
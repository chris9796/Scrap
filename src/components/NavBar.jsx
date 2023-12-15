import React from 'react';
import "../components_css/NavBar.css";
import Logo from "../Logo-Scrap-480x480.png"
import NavButton from './NavButton';
import {Link} from "react-router-dom"
function NavBar(){


    return(
        <nav className='NavBar'>
            
            <img src={Logo} style={{height:"60px"}} alt='Logo'/>
           
            <Link to="/SignUp">
            <NavButton name="Sign Up"/>
            </Link>
            <NavButton name="Sign In"/>



        </nav>
    );

}

export default NavBar;
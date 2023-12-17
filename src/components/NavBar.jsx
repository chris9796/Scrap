import React from 'react';
import "../components_css/NavBar.css";
import NavLogo from './NavLogo';
import NavButton from './NavButton';
import {Link} from "react-router-dom"
function NavBar(){


    return(
        <nav className='NavBar'>
            <Link to="/">
            <NavLogo/>
            </Link>
            <Link to="/SignUp">
            <NavButton name="Sign Up"/>
            </Link>
            <Link to="/SignIn">
            <NavButton name="Sign In"/>
            </Link>


        </nav>
    );

}

export default NavBar;
import React from "react";
import {Link} from "react-router-dom"
import "../components_css/Page.css"
import "../components_css/NavBar.css";
import NavLogo from '../components/NavLogo';
import NavButton from '../components/NavButton.jsx';
import UrlInput from "../components/UrlInput.jsx";
function UserHome(){


    return(
        <div className="Page">
            <nav className='NavBar'>
            <Link to="/">
            <NavLogo/>
            </Link>
            <Link>
            <NavButton name="Logout" color="red"/>
            </Link>
            <Link >
            <NavButton name="Settings"/>
            </Link>
        </nav>
        <aside>
            hi
        </aside>
        <section>
            <UrlInput/>

        </section>


        </div>
    );
}

export default UserHome;
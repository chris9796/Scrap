import React from 'react';
import "../components_css/NavBar.css";
import NavLogo from './NavLogo';
import NavButton from './NavButton';
import {Link} from "react-router-dom"
function NavBar(){
//어떻게 하면 우리가 계속 재활용 할수 있을까? 이게 가장중요한데 어떻게 하지
//그냥 우리는 따로따로 나누자 이거 너무 묶엇어 넘 ㅄ임 ㄹㅇ


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
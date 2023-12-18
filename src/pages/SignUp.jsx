import React from "react";
import {Link} from "react-router-dom"
import "../components_css/Page.css"
import NavLogo from "../components/NavLogo.jsx";
import NavButton from "../components/NavButton.jsx";
import SectionInput from "../components/SectionInput.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SectionButton from "../components/SectionButton.jsx";

function SignUp(){


    return(
        <div className="Page">
            <nav className='NavBar'>
                <Link to="/">
                <NavLogo/>
                </Link>
                <Link to="/SignIn">
                <NavButton name="SignIn"/>
                </Link>
            </nav>
            <section>
                <SectionTitle title="Sign Up" size="100px" color="white"/>
                <form action="" style={{
                    margin: "50px"

                }}>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"30px",
                    alignItems:"center"

                }}>
                <SectionInput name="Username" />
                <SectionInput name="Password"/>
                <SectionInput name="Confirm Password"/>
                <SectionInput name="Email"/>
                <div style={{color:"white"}}>
                    Already Sign Up? Please <Link to="/SignIn">SignIn</Link>
                </div>
                <Link to="/SignIn">
                <SectionButton name="SignUp" color="white"/>
                </Link>
                </div>
                
                </form>
             </section>
        </div>

    );
}

export default SignUp;
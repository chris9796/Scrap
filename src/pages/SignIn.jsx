import React from "react";
import {Link} from "react-router-dom"
import "../components_css/Page.css"
import "../components_css/NavBar.css";
import NavLogo from '../components/NavLogo';
import NavButton from '../components/NavButton.jsx';
import SectionTitle from "../components/SectionTitle";
import SectionInput from "../components/SectionInput";
import SectionButton from "../components/SectionButton";
function SignIn(){


    return(
        <div className="Page">
            <nav className='NavBar'>
            <Link to="/">
            <NavLogo/>
            </Link>
            <Link to="/SignUp">
            <NavButton name="Sign Up"/>
            </Link>
           
        </nav>



        <section style={{
             width:"100%",
             float:"right",
            height:"calc(100vh - 60px)",
            display:"flex",
            flexDirection:"column",
            marginTop:"150px",
            textAlign:"center"

            
            
        }}>

        <SectionTitle title="Sign In" size="100px" color="white"/>
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
         
        
         <Link to="/UserHome" style={{
                        textDecorationLine:"none",
                    
                    }}>
         <SectionButton name="Sign In" color="white"/>
         </Link>
         </div>
        
         </form>
         </section>
    </div>
    );
}

export default SignIn;
import React from "react";
import {Link} from "react-router-dom"

import NavLogo from "../../common/NavLogo.jsx";
import NavButton from "../../common/NavButton/NavButton.jsx";
import SectionInput from "../../common/SectionInput/SectionInput.jsx";
import SectionTitle from "../../common/SectionTitle/SectionTitle.jsx";
import SectionButton from "../../common/SectionButton.jsx";

function SignUp(){


    return(
        <div className="Page">
            <nav className='NavBar'>
                <Link to="/">
                <NavLogo/>
                </Link>
                <Link to="/SignIn">
                <NavButton name="Sign In"/>
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
                <SectionTitle title="Sign Up" size="100px" color="white"/>
                <form action="" style={{
                    margin: "25px"

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
                    Already Signed Up? Please 
                    &nbsp;
                    <Link to="/SignIn" style={{
                        textDecorationLine:"none",
                    
                    }}>
                    <span style={{
                        fontWeight:"bold",
                        
                    }}>
                                <style>
                                    {`
                                    a:visited {
                                        color: white;
                                    }
                                    a:link {
                                        color: white;
                                    }
                                  
                                    
                                    `}</style>
                      Sign In
                    </span>
                    </Link>
                </div>
                <Link to="/SignIn" style={{
                        textDecorationLine:"none",
                    
                    }}>
                <SectionButton name="Sign Up" color="white"/>
                </Link>
                </div>
                
                </form>
             </section>
        </div>

    );
}

export default SignUp;
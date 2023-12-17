import React from "react";
import "../components_css/Page.css"
import NavBar from "../components/NavBar.jsx"
import SectionInput from "../components/SectionInput.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SectionButton from "../components/SectionButton.jsx";
function SignUp(){


    return(
        <div className="Page">
            <NavBar/>
            <section>
            <SectionTitle title="Sign Up" size="100px"/>
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
                already Sign Up?
             </div>
             <SectionButton name="SignUp"/>
             </div>
            
             </form>
             </section>
        </div>

    );
}

export default SignUp;
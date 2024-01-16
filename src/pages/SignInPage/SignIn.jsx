import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./SignIn.css";
import SectionTitle from "../../common/SectionTitle/SectionTitle.jsx";
import SectionInput from "../../common/SectionInput/SectionInput.jsx";
import SectionButton from "../../common/SectionButton.jsx";
function SignIn() {
    return (
        <>
            <section className="signinsection">
                <SectionTitle title="Sign In" size="100px" color="white" />
                <form>
                    <SectionInput name="Username" />
                    <SectionInput name="Password" />
                    <Link to="/UserHome" className="Link">
                        <SectionButton name="Sign In" color="white" />
                    </Link>
                </form>
            </section>
        </>
    );
}

export default SignIn;

{
    /* <div className="Page">
            
<section className="section"
    style={{
        width: "100%",
        float: "right",
        height: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        marginTop: "150px",
        textAlign: "center",
    }}
>
    <SectionTitle title="Sign In" size="100px" color="white" />
    <form
        style={{
            margin: "50px",
        }}
    >
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                alignItems: "center",
            }}
        >
            <SectionInput name="Username" />
            <SectionInput name="Password" />

            <Link
                to="/UserHome"
                style={{
                    textDecorationLine: "none",
                }}
            >
                <SectionButton name="Sign In" color="white" />
            </Link>
        </div>
    </form>
</section>
</div> */
}

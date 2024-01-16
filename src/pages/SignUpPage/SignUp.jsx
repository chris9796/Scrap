import React from "react";
import { Link } from "react-router-dom";
import SectionInput from "../../common/SectionInput/SectionInput.jsx";
import SectionTitle from "../../common/SectionTitle/SectionTitle.jsx";
import SectionButton from "../../common/SectionButton.jsx";
import AlreadySignedUp from "./components/AlreadySignedUp.jsx";

function SignUp() {
    return (
        <>
            <section className="signupsection">
                <SectionTitle title="Sign Up" size="100px" color="white" />
                <form>
                    <SectionInput name="Username" />
                    <SectionInput name="Password" />
                    <SectionInput name="Confirm Password" />
                    <SectionInput name="Email" />
                    <AlreadySignedUp />
                    <Link to="/SignIn" className="Link">
                        <SectionButton name="Sign Up" color="white" />
                    </Link>
                </form>
            </section>
        </>
    );
}

export default SignUp;

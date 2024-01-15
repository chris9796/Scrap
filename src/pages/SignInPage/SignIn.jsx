import React from "react";
import { Link, Outlet } from "react-router-dom";

import SectionTitle from "../../common/SectionTitle/SectionTitle.jsx";
import SectionInput from "../../common/SectionInput/SectionInput.jsx";
import SectionButton from "../../common/SectionButton.jsx";
function SignIn() {
    return (
        <div className="Page">
            <Outlet />
            <section
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
        </div>
    );
}

export default SignIn;

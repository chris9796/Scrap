import React from "react";
import { Link } from "react-router-dom";
const AlreadySignedUp = () => {
    return (
        <>
            <div style={{ color: "white" }}>
                Already Signed Up? Please &nbsp;
                <Link className="Link" to="/SignIn">
                    <span
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        <style>
                            {`
                                    a:visited {
                                        color: white;
                                    }
                                    a:link {
                                        color: white;
                                    }
                                  
                                    
                                    `}
                        </style>
                        Sign In
                    </span>
                </Link>
            </div>
        </>
    );
};

export default AlreadySignedUp;

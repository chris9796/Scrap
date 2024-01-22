import React from "react";
import { Link } from "react-router-dom";
import UrlInput from "../../common/UrlInput/UrlInput.jsx";
import AsideLayOut from "../../layout/AsideLayOut/AsideLayOut.jsx";
import "./UserHome.css";
function UserHome() {
    return (
        <>
            <AsideLayOut />
            <section className="userhomesection">
                <Link to="/UserHomeAfter" className="Link">
                    <UrlInput />
                </Link>
                {/* <div>
                
                {/* <div style={{backgroundColor:"blue",width:"200px",}}>hi</div> 
                </div> */}
            </section>
        </>
    );
}

export default UserHome;


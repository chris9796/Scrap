import React from "react";
import { Link } from "react-router-dom";
import UrlInput from "../../common/UrlInput/UrlInput.jsx";
import AsideLayOut from "../../layout/AsideLayOut/AsideLayOut.jsx";
import "./UserHomeAfter.css"
import SectionScrapList from "../../common/SectionScrapList/SectionScrapList.jsx";
import SectionButton from "../../common/SectionButton.jsx";
function UserHomeAfter() {
    return (
        <>
            <AsideLayOut />
            <section className="userhomeaftersection">
                <UrlInput />
                <SectionScrapList />
                <Link to="/MyScraps" className="Link">
                    <SectionButton name="Save" color="white" />
                </Link>
            </section>
        </>
    );
}

export default UserHomeAfter;

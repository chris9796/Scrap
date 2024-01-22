import React from "react";


import SectionTitle from "../../common/SectionTitle/SectionTitle.jsx";
import SectionScrapCard from "../../common/SectionScrapCard .jsx";
import AsideLayOut from "../../layout/AsideLayOut/AsideLayOut.jsx";
import "./MyScraps.css";
function MyScraps() {
    return (
        <>
            <AsideLayOut />
            <section className="myscraps">
                <SectionTitle title="My Scraps" size="60px" color="white" />
                <div className="SectionScrapCardBox">
                    <SectionScrapCard title="im shinhan" UrlSource="" />
                    <SectionScrapCard title="나는야 영끌족" UrlSource="" />
                    <SectionScrapCard title="나는야 바보" UrlSource="" />
                </div>
            </section>
        </>
    );
}

export default MyScraps;

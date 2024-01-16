import React from "react";
import { Link } from "react-router-dom";
import AsideUserBox from "../../common/AsideUserBox/AsideUserBox.jsx";
import AsideButton from "../../common/AsideButton/AsideButton.jsx";
import AsideTitle from "../../common/AsideTitle.jsx";
import "./AsideLayOut.css"
const AsideLayOut = () => {
    return (
        <aside className="aside">
            <AsideUserBox />
            <Link to="/MyScraps" className="Link">
                <AsideButton />
            </Link>

            <div className="AsideTitleList">
                <AsideTitle ArticleTitle="im shinhan" />
                <AsideTitle ArticleTitle="나는야 영끌족" />
                <AsideTitle ArticleTitle="나는야 바보" />
            </div>
        </aside>
    );
};

export default AsideLayOut;

import React from "react";
import "../components_css/UrlInput.css"
import Search from "../Icon - Search (60x60).png"
function UrlInput(){

    return(
        <div className="SearchWrap">
            <input type="text" className="UrlInput" placeholder="Paste Url.."/>
            <img src={Search} alt="Search" className="SearchLogo" />
        </div>

    );
}
export default UrlInput;
import React from "react";

function AsideTitle(props){
    return(
    <div style={{
        marginTop:"15px",
        border:"2px solid white",
        color:"white",
        fontWeight:"lighter"

    }}>
        {props.ArticleTitle}
    </div>);
}

export default AsideTitle;
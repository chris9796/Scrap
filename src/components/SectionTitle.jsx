import React from "react";

function SectionTitle(props){

    return(
        <span style={{
            fontSize : "100px",
            color: "white"
        }}>
            {props.title}
        </span>
    );
}

export default SectionTitle;
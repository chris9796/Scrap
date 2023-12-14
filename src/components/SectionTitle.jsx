import React from "react";

function SectionTitle(props){

    return(
        <span style={{
            fontSize : "",
            color: "white"
        }}>
            {props.title}
        </span>
    );
}

export default SectionTitle;
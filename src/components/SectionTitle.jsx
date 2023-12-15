import React from "react";

function SectionTitle(props){
    const style = {
        fontSize: props.size,
        color:"white"
    }
    return(
        <span style={style}>
            {props.title}
        </span>
    );
}

export default SectionTitle;
import React from "react";

function SectionButton(props){

    return(
        <button style={{
            display:"inline",
            width:"120px",
            height:"50px",
            border: "1px solid #6075B5",
            borderRadius:"10px",
            backgroundColor:"#151C2E",
            color:"white",
            fontWeight:"bolder"
            
        }}>
            {props.name}
        </button>


    );

}

export default SectionButton;
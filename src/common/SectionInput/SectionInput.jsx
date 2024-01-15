import React from "react";
import "./SectionInput.css"
function SectionInput(props){
    
    return(
        
        <input type="text" placeholder={props.name} className="SectionInput"/>

    );
}

export default SectionInput;
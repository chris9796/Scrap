import React from "react";
import "../components_css/SectionInput.css"
function SectionInput(props){
    
    return(
        
        <input type="text" placeholder={props.name} className="SectionInput"/>

    );
}

export default SectionInput;
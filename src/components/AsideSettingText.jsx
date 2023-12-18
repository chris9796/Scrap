import React from "react";

function AsideSettingText(props){
    return(
        <li style={{
            color:props.color,
            fontSize:props.size
        }}>
            {props.name}
        </li>
    );
}

export default AsideSettingText;
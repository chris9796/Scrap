import React from 'react';
import "../components_css/NavButton.css"
function NavButton(props){

    return(
            <button className='NavButton' style={{
                cursor:"pointer",
                color:props.color,
                margin:"0px 10px 0px 0px"
            }}>
                {props.name}
            </button>
    );
}

export default NavButton;
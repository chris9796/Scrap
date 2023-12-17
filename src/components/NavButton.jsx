import React from 'react';
import "../components_css/NavButton.css"
function NavButton(props){

    return(
            <button className='NavButton' style={{
                cursor:"pointer"
            }}>
                {props.name}
            </button>
    );
}

export default NavButton;
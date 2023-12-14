import React from 'react';
import Input from './SignUpInput'
import "../components_css/SignUpMiddleBar.css"
function SignUpMiddleBar(){


    return(

       <div className='MiddleBar'>
        <div style={{
            color : "white",
            fontSize : "100px",
            textAlign :'center'
        }}>Sign Up</div>
            <Input style={{
                
            }}/>
       </div>
    );

}

export default SignUpMiddleBar;
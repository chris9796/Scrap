import React from "react";

function SectionScrapCard(props){

    return(
        
        <div style={{color:"white",
        
       margin:"30px",
        width:"350px",
        height:"auto",
        fontWeight:"bolder",
        backgroundColor:"#151C2E",
        borderRadius:"10px",
        padding:"2px 0px 0px 0px",
        textAlign:"center",
        
        flexDirection:"column",
        display:"inline-flex"
        
        }}>
            <div style={{
                color:"#839CDD",
                fontSize:"30px"
            }}>{props.title}</div>
            <ul style={{
               textAlign:"left",
               margin:"0px",
               fontSize:"20px",
               fontWeight:"bolder",
               padding:"10px 0px 10px 35px",
               display: "flex",
               flexDirection: "column",
               gap:"5px",
            }}>
                
                <li>hihih</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
            </ul>
            <div style={{
                fontSize:"10px",
               fontWeight:"lighter",
                color:"white"
            }}>Source Url</div>
        </div>
    );
}
export default SectionScrapCard;
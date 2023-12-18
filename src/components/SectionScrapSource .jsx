import React from "react";

function SectionScrapSource(props){

    return(
        <div style={{
            backgroundColor:"#151C2E",
            textAlign:"left",
            padding:"20px",
            borderRadius:"10px",
            marginBottom:"20px"
        }}>
            <div className="ScrapSourceAuthor" style={{
                color:"#839CDD",
                fontSize:"25px",
                fontWeight:"bolder"
            }}>
                {props.Author}
            </div>
            <div className="ScrapSourceURL" style={{
                color:"#839CDD",
                fontSize:"15px"
            }}>
                {props.UrlSource}
            </div>
        </div>
    );
}
export default SectionScrapSource;

import React from "react";

function SectionScrapSource(props){

    return(
        <div>
            <div className="ScrapSourceAuthor">
                {props.Author}
            </div>
            <div className="ScrapSourceURL ">
                {props.UrlSource}
            </div>
        </div>
    );
}
export default SectionScrapSource;

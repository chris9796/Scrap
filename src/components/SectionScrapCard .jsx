import React from "react";

function SectionScrapCard(props){

    return(
        //무조건 한번에 많은 글자를 가져와서 프론트에서 쪼개는게 훨씬나을것같긴함. 그래서 그걸 쪼갠걸로 변수 저장해서 바로 그변수 이용해서 보여주면 개꿀일듯
        <div style={{color:"white",display:"inline-block",
       margin:"30px",
        width:"200px",
        backgroundColor:"#151C2E",
        borderRadius:"10px"
        }}>
            <div style={{
                color:"#839CDD",
                fontSize:"30px"
            }}>{props.title}</div>
            <ul style={{
               textAlign:"left",
               margin:"0px",
               fontSize:"20px"
            }}>
                
                <li>1</li>
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
               
                color:"white"
            }}>Source Url</div>
        </div>
    );
}
export default SectionScrapCard;
import React from "react";
import {Link, Outlet} from "react-router-dom"
import NavLogo from '../../common/NavLogo.jsx';
import NavButton from '../../common/NavButton/NavButton.jsx';
import AsideUserBox from "../../common/AsideUserBox/AsideUserBox.jsx";
import AsideButton from "../../common/AsideButton/AsideButton.jsx";
import AsideTitle from "../../common/AsideTitle.jsx";
import SectionScrapList from "../../common/SectionScrapList/SectionScrapList.jsx";
import SectionButton from "../../common/SectionButton.jsx";
import SectionTitle from "../../common/SectionTitle/SectionTitle.jsx"
import SectionScrapSource from "../../common/SectionScrapSource .jsx";
function ScrapSingle(){


    return(
        <div className="Page">
            <Outlet/>
        
        <aside style={{
            backgroundColor:"#151C2E",
            width:"20%",
            height: "calc(100vh - 60px)",
            margin:"0",
            display:"inline-block"
        }}>
            
            <AsideUserBox/>
            <Link to="/MyScraps" style={{
                        textDecorationLine:"none",
                        
                    }}>
            <AsideButton/>
            </Link>

            <div className="AsideTitleList" style={{
                marginTop:"30px"
            }}>
                
                <AsideTitle ArticleTitle="im shinhan"/>
                <AsideTitle ArticleTitle="나는야 영끌족"/>
                <AsideTitle ArticleTitle="나는야 바보"/>
            </div>

        </aside>
        <section style={{
            alignItems:"center",
            display:"flex",
            flexDirection:"column",
            width:"80%",
            float:"right",
           height:"calc(100vh - 60px)",
           display:"flex",
           alignItems:"center",
           flexDirection:"column",
            justifyContent:"center",
            gap:"10px"
            
        }}>
            <SectionTitle title="Article Title - Big" size="50px" color="#839CDD"/>
            <SectionScrapList/>
            <SectionScrapSource Author="Heo Eun Seongdㄴㅇㄴsadfsafsfsdasdfdfsafdskfsadjsdfklsdaklfjkl" 
            UrlSource="https://www.notion.so/jaychung-public-scrap/React-9a55f1b9895b4c99b8af55a6cd186c99" />
            <div style={{

                display:"flex",
                justifyContent: "space-between" ,
                gap: "100px"
            }}>
            <SectionButton name ="Edit" color="white"/>
            <SectionButton name ="Delete" color="#EE5656"/>
            </div>
            

            
        </section>


        </div>
    );
}

export default ScrapSingle;
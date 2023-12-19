import React from "react";
import {Link} from "react-router-dom"
import "../components_css/Page.css"
import "../components_css/NavBar.css";
import NavLogo from '../components/NavLogo';
import NavButton from '../components/NavButton.jsx';
import AsideUserBox from "../components/AsideUserBox.jsx";
import AsideButton from "../components/AsideButton.jsx";
import AsideTitle from "../components/AsideTitle.jsx";
import SectionScrapList from "../components/SectionScrapList.jsx";
import SectionButton from "../components/SectionButton";
import SectionTitle from "../components/SectionTitle.jsx"
import SectionScrapSource from "../components/SectionScrapSource .jsx";
function ScrapSingle(){


    return(
        <div className="Page" style={{
               
        }}>
            <nav className='NavBar'>
            <Link to="/">
            <NavLogo/>
            </Link>
            <Link>
            <NavButton name="Sign Out" color="red"/>
            </Link>
            <Link to="/SettingsChangePassword">
            <NavButton name="Settings"/>
            </Link>
        </nav>
        <aside style={{
            backgroundColor:"#151C2E",
            width:"20%",
            height: "calc(100vh - 60px)",
            margin:"0"
        }}>
            
            <AsideUserBox/>
            <Link to="/MyScraps">
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
            
        }}>
            <SectionTitle title="Article Title - Big" size="60px" color="#839CDD"/>
            <SectionScrapList/>
            <SectionScrapSource Author="Heo Eun Seongdㄴㅇㄴsadfsafsfsdasdfdfsafdskfsadjsdfklsdaklfjkl" UrlSource="https://hihi" />
            <div style={{
                display:"flex",
                justifyContent: "space-between" ,
                gap: "40px"
            }}>
            <SectionButton name ="Edit" color="white"/>
            <SectionButton name ="Delete" color="red"/>
            </div>
            

            
        </section>


        </div>
    );
}

export default ScrapSingle;
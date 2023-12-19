import React from "react";
import {Link} from "react-router-dom"
import "../components_css/Page.css"
import "../components_css/NavBar.css";
import NavLogo from '../components/NavLogo';
import NavButton from '../components/NavButton.jsx';
import AsideUserBox from "../components/AsideUserBox.jsx";
import AsideButton from "../components/AsideButton.jsx";
import AsideTitle from "../components/AsideTitle.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SectionScrapCard from "../components/SectionScrapCard .jsx";
function MyScraps(){
    


    return(
        <div className="Page" style={{
            position:"flex"
        }}>
            <nav className='NavBar'>
            <Link to="/UserHome">
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
        <section>
        <SectionTitle title="My Scraps" size="60px" color="white"/>
            <div className="SectionScrapCardBox"
            style={{
                position:"flex",
                
            }}>
                <SectionScrapCard title="im shinhan" UrlSource="" />
                <SectionScrapCard title="나는야 영끌족" UrlSource=""/>
                <SectionScrapCard title="나는야 바보" UrlSource=""/>
            </div>
        </section>


        </div>
    );
}

export default MyScraps;
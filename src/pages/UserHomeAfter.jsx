import React from "react";
import {Link} from "react-router-dom"
import NavLogo from '../common/NavLogo.jsx';
import NavButton from '../common/NavButton/NavButton.jsx';
import UrlInput from "../common/UrlInput/UrlInput.jsx";
import AsideUserBox from "../common/AsideUserBox/AsideUserBox.jsx";
import AsideButton from "../common/AsideButton/AsideButton.jsx";
import AsideTitle from "../common/AsideTitle.jsx";
import SectionScrapList from "../common/SectionScrapList/SectionScrapList.jsx";
import SectionButton from "../common/SectionButton.jsx";
function UserHomeAfter(){


    return(
        <div className="Page" style={{
            position:"flex"
        }}>
            <nav className='NavBar'>
            <Link to="/UserHome">
            <NavLogo/>
            </Link>
            <Link to="/">
            <NavButton name="Sign Out" color="#EE5656"/>
            </Link>
            <Link to="/SettingsChangePassword">
            <NavButton name="Settings"/>
            </Link>
        </nav>
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
               width:"80%",
               float:"right",
              height:"calc(100vh - 60px)",
              display:"flex",
              alignItems:"center",
              flexDirection:"column",
            gap:"30px"
           
        }}>
            <UrlInput/>
            <SectionScrapList/>
            <Link to="/MyScraps" style={{
                        textDecorationLine:"none",
                        
                    }}>
            <SectionButton name="Save" color="white"/>
            </Link>
        </section>


        </div>
    );
}

export default UserHomeAfter;
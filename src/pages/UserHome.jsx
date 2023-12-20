import React from "react";
import {Link} from "react-router-dom"
import "../components_css/Page.css"
import "../components_css/NavBar.css";
import NavLogo from '../components/NavLogo';
import NavButton from '../components/NavButton.jsx';
import UrlInput from "../components/UrlInput.jsx";
import AsideUserBox from "../components/AsideUserBox.jsx";
import AsideButton from "../components/AsideButton.jsx";
import AsideTitle from "../components/AsideTitle.jsx";
function UserHome(){


    return(
        <div className="Page" style={{
            
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
           justifyContent:"center",
           
            


        }}>
            <div style={{
                
              
            }}>
          <Link to="/UserHomeAfter" style={{
                        textDecorationLine:"none",
                        
                    }}>
            <div style={{
                cursor:"pointer"
            }}>
            <UrlInput/>
            </div>
            </Link>
            </div>
        </section>


        </div>
    );
}

export default UserHome;
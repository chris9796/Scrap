import React from "react";
import {Link} from "react-router-dom"
import "../components_css/Page.css"
import "../components_css/NavBar.css";
import NavLogo from '../components/NavLogo';
import NavButton from '../components/NavButton.jsx';
import SectionTitle from "../components/SectionTitle.jsx";
import AsideUserBox from "../components/AsideUserBox.jsx";
import AsideButton from "../components/AsideButton.jsx";
import SectionInput from "../components/SectionInput.jsx";
import SectionButton from "../components/SectionButton.jsx";
import AsideText from "../components/AsideText.jsx";
import AsideSettingText from "../components/AsideSettingText.jsx";
function SettingsChangePassword(){


    return(
        <div className="Page" style={{
            position:"flex"
        }}>
            <nav className='NavBar'>
            <Link to="/UserHome">
            <NavLogo/>
            </Link>
            <Link to="/">
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
            <AsideText name="Settings"/>
            <ul className="AsideSettingList" style={{
                display:"flex",
                flexDirection:"column",
                gap:"20px"
            }}>
                <AsideSettingText name="Change Password" color="white" size="20px"/>
                <Link to="/SettingsDeleteAccount">
                <AsideSettingText name="Delete Account" color="red" size="20px"/>
                </Link>
            </ul>
          
          

        </aside>
        <section style={{
            
            alignItems:"center",
           
        }}>
        <SectionTitle color="white" title="Change Password" size="60px"/>
        <form action="" style={{
            display:"flex",
            flexDirection:"column",
            gap:"30px",
            alignItems:"center",
            margin:"30px"

        }}>
          <SectionInput name="Current Password"/>
          <SectionInput name="New Password"/>
          <SectionInput name="Confirm New Password"/>
        <div style={{
            display:"flex",
            flexDirection:"row",
            gap:"30px"

        }}>
          <SectionButton name="Confirm" color="white"/>
          <SectionButton name="Cancel" color="#FFC000"/>
          </div>
          </form>
          {/* 이거는 바로바로 onChange 함수 사용해서 confirm 확인을 계속해서 봐주자 하나라도 틀리면 x 다 맞으면 바로 o표시*/}
        </section>


        </div>
    );
}

export default SettingsChangePassword;
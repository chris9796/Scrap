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
function SettingDeleteAccount(){


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
            <AsideText name="Settings"/>
            <ul className="AsideSettingList" style={{
                display:"flex",
                flexDirection:"column",
                gap:"20px"
            }}>
                <Link to="/SettingsChangePassword" style={{
                        textDecorationLine:"none",
                        
                    }}>
                <AsideSettingText name="Change Password" color="white" size="20px"/>
                </Link>
                <AsideSettingText name="Delete Account" color="#EE5656" size="20px"/>
            </ul>
          
          

        </aside>
        <section style={{
            
            alignItems:"center",
            width:"80%",
            float:"right",
           height:"calc(100vh - 60px)",
           display:"flex",
           alignItems:"center",
           flexDirection:"column",
          marginTop:"100px",
            gap:"5px"
          
           
        }}>
        <SectionTitle color="#EE5656" title="Delete Account" size="60px"  />
        <form action="" style={{
           display:"flex",
           flexDirection:"column",
           gap:"20px",
           alignItems:"center",
           margin:"30px"
        }}>
          <SectionInput name="Password"/>
          <SectionInput name="Confirm Password"/>
          <SectionTitle title="!This action is irreversible." color="#EE5656" size="15px"/>
        <div style={{
           display:"flex",
           flexDirection:"row",
           gap:"30px",
           
        }}>
          <SectionButton name="Delete" color="#EE5656"/>
          <SectionButton name="Cancel" color="#FFC000"/>
          </div>
          </form>
          {/* 이거는 바로바로 onChange 함수 사용해서 confirm 확인을 계속해서 봐주자 하나라도 틀리면 x 다 맞으면 바로 o표시*/}
        </section>


        </div>
    );
}

export default SettingDeleteAccount;
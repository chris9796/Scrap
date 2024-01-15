import React from "react";
import {Link} from "react-router-dom"
import NavLogo from '../../../common/NavLogo.jsx';
import NavButton from '../../../common/NavButton/NavButton.jsx';
import SectionTitle from "../../../common/SectionTitle/SectionTitle.jsx";
import AsideUserBox from "../../../common/AsideUserBox/AsideUserBox.jsx";
import AsideButton from "../../../common/AsideButton/AsideButton.jsx";
import SectionInput from "../../../common/SectionInput/SectionInput.jsx";
import SectionButton from "../../../common/SectionButton.jsx";
import AsideText from "../../../common/AsideText.jsx";
import AsideSettingText from "../../../common/AsideSettingText.jsx";
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
                <AsideSettingText name="Change Password" color="white" size="20px"/>
                <Link to="/SettingsDeleteAccount" style={{
                        textDecorationLine:"none",
                        
                    }}>
                <AsideSettingText name="Delete Account" color="#EE5656" size="20px"/>
                </Link>
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
        <SectionTitle color="white" title="Change Password" size="60px"/>
        <form action="" style={{
            display:"flex",
            flexDirection:"column",
            gap:"20px",
            alignItems:"center",
            margin:"30px"

        }}>
          <SectionInput name="Current Password"/>
          <SectionInput name="New Password"/>
          <SectionInput name="Confirm New Password"/>
        <div style={{
            display:"flex",
            flexDirection:"row",
            gap:"30px",
            marginTop:"30px"
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
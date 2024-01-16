import React from "react";
import { Link } from "react-router-dom";
import UrlInput from "../../common/UrlInput/UrlInput.jsx";
import AsideLayOut from "../../layout/AsideLayOut/AsideLayOut.jsx";
import "./UserHome.css";
function UserHome() {
    return (
        <>
            <AsideLayOut />
            <section className="userhomesection">
                <Link to="/UserHomeAfter" >
                    <UrlInput />
                </Link>
                <div>
                
                {/* <div style={{backgroundColor:"blue",width:"200px",}}>hi</div> */}
                </div>
            </section>
        </>
    );
}

export default UserHome;

{
    /* <aside style={{
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
</section> */
}

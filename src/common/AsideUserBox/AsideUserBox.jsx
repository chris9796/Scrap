import React from "react";
import "./AsideUserBox.css"
function AsideUserBox(){
const UserSrc = "https://i.namu.wiki/i/PZAEKMZzB4eaB8_ZiMMmV565ytemOAw5PlTHgm19933C63Bom-kYIhBY5Dqwe7n7VfaYzFfIZSe1Aq4Eicodx48yr6c7z-NBzjtNGZciFLH47Ly3ZlOsYzRnBtCflUPh42FeLgVky-jwQQnmunRx1w.webp";
    return(
        <div className="AsideUserBox">
            <div className="AsideUserRoundBox">
                <img src= {UserSrc}
                style={{
                    display:"inline-block"
                }}
                alt="북극여우" className="UserImg"/>    
            </div>
            <div>
                <div style={{
                    fontWeight: "bold",
                    color:"white"
                }}>
                    User_Props
                </div>
                
                <div style={{
                    
                    color:"white"
                }}>
                    Your Personal Account
                </div>
            </div>
        </div>
    );
}

export default AsideUserBox;
import React from "react";
import Anime from './anime.jpg'
function RightHader () {
    return (
        <div className="Contrones-container">
        <div>
        <nav className="Right-container-child Right-margin">
        <img className="Right-user-img" src={Anime} />    
    </nav>
    <div className="Rightname">
    <span className="User-Name-Right">hyat_myat  <span className="User2-Name-Right">Hyat Myat</span></span>   
    </div>
        </div>
    <div className="Switch-container">
    <span className="Switch1">Switch</span>
    </div> 
     </div>
    )
}

export default RightHader
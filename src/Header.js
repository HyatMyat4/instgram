import React from "react";
import Img1 from './i.png'
import Angledown from './angledown.png'
import Home from './Home.png'
import Aero from './Aero.png'
import Plus from './plus.png'
import Compess from './Compess.png'
import Love from './Love.png'
import Anime from './anime.jpg'




export default function Header ( ) {
 function HandleClick() {

    console.log("it working")
 }   
return (  
    
 <div className="Header">
<div className="Header-Cointaer">
<nav className="Angle-down-Container">
 <img className="i-img" src={Img1} />
 <img onClick={HandleClick}  className="angle-down" src={Angledown} />
</nav> 
<nav className="input-Hader-Logo-Container">
    <div className="input-Container">       
    <i  className="fa-solid fa-magnifying-glass search-icon" ></i>
    <input className="Header-inpt" type="email" placeholder= "  Search" />
    </div>
    <div className="Header-Logo-Container">
    <img className="Header-Logo" src={Home} />
    <img className="Header-Logo" src={Aero} />
    <img className="Header-Logo" src={Plus} />
    <img className="Header-Logo" src={Compess} />  
    <img className="Header-Logo" src={Love} />  
    <img className="Header-Logo User-logo" src={Anime} /> 
    </div>
</nav>
</div>
 </div>

 )
};
import React from "react";



function PopularProfail  (props) {
return(
    <div className="Contrones-container Follow-margin">
    <div>
    <nav className="Right-container-child">
    <img className="Right-user-img Follow-list-img" src={props.img} />    
</nav>
<div className="Rightname Follow-Name">
<span className="User-Name-Right">{props.name} {props.mark}<span className="User2-Name-Right follow-popular">{props.type}</span></span>   
</div>
    </div>
<div className="Switch-container ">
<span className="Switch1">Follow</span>
</div> 
 </div>


)


}

export default PopularProfail
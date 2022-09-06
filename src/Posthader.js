import React from "react";
import Elomusk from './elomusk.jfif'
import ddd from './dech.png'
import Profailborder from './boder.png'
function postHeader ({Profail , ProfailName }) {
    return (
<div className="Post-hader">
<nav className="Post-Left">    
<img className="Post-Boder" src={Profailborder}/>
<img className="Post-Profail" src={Profail} />
<div className="Post-Profail-Name">
<nav className="Profail-name-post">{ProfailName}</nav>
<nav className="Offical"></nav>
</div>
</nav>
<nav className="Post-Right">
<img className="ddd" src= {ddd}/>
</nav>
</div>

    )
}

export default postHeader

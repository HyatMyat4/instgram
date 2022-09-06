import React from "react";


function secondFooter ({like , profailNameText , postText ,Time , allCommect }) {
    return(
<div className="Second-footer">
<div className="like-count">{like}</div>
<div className="Post-imfo-para">
  
<p className="p-tag"> <span className="Para-Name">{profailNameText}</span>   
  {postText}
    <span className="Read-more">...more</span>
    </p>
</div>
<div className="All-commect">
{allCommect}
</div>
<date className= "Date-ago">{Time}</date>

</div>


    )
} 

export default  secondFooter
import React from "react";
import PostHeader from './Posthader'
import PostImg from './postImg'
import FirstFooter from './FirstFooter'
import SecondFooter from './seconfFooter'
import CommectFooter from './CommectFooter'

function Post ({ Profail , ProfailName , postImg , like , profailNameText , postText , allCommect , Time}) {
    return(  
<div className="Post">
<PostHeader
Profail={Profail}
ProfailName={ProfailName}
/>
<PostImg
postImg={postImg}
/>
<FirstFooter/>
<SecondFooter
like={like}
profailNameText={profailNameText}
postText={postText}
allCommect={allCommect}
Time={Time}
/>
<CommectFooter/>
</div>


    )
} 

export default  Post
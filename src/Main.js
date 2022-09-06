import React from "react";
import Profail  from "./App";
import Sugar from './sugar.jfif'
import Elomusk from './elomusk.jfif'
import Zuckerberg from './Zuckerberg.jfif'
import PopularProfail from './PopularProfail'
import Ronaldo from './ronaldo.jpg'
import No1instgram from './no1.jfif'
import Manu from './manu.png'
import Messic from './messic.jfif'
import AlanWalker from './alanwalker.jfif'
import RightFooter from './RightFooter'
import RightHader from './RightHader'
import ElomuckPost from './Elomuskpost.png'
import GreenClothes from './imgFolder/GreenClothes.png'
import SeaGirl from './imgFolder/seagirl.png'
import Tesla from './imgFolder/tesla3.png'
import RonaldoProfail from './imgFolder/cisto.jpg'
import RonaldoPost1 from './imgFolder/ronaldo.png'
import Ronaldowin from './imgFolder/wincisto.jpg'
import Therock from './imgFolder/therock.jpg'
import Therockselfe from './imgFolder/therockselfe.png'
import Beach from './imgFolder/beach.jpg'
import Post from './Post'
import { useState } from "react";
export default function Main() {
const [ items , setItems ]  = useState([
    {
        Profail : SeaGirl,
        ProfailName :"huyenrubi1997",
        postImg : GreenClothes,
        like : "4,374 likes",  
        postText :'People just want peace ☘️☘️☘️ ',
        allCommect : 'View all 21 comments',
        Time :'MARCH 2',
    },
    {
        Profail :RonaldoProfail ,
        ProfailName :"cristiano",
        postImg : Ronaldowin,
        like : "7,725,002 likes",  
        postText :' Great victory! 💪🏽 #mufc paula_brito_7 👏👏👏👏👏❤️💪🏻💪🏻💪🏻',
        allCommect : 'View all 79,092 comments',
        Time :'3 DAYS AGO',
    },
{
    Profail : Elomusk,
    ProfailName :"elomusk_ab",
    postImg : ElomuckPost,
    like : "1,277 likes", 
    postText :' Dont miss this opportunity to utilize @certifiedeth_cg unique trading strategies, she teaches ',
    allCommect : 'View all 11 comments',
    Time :'1 DAY AGO',
},
{
    Profail : SeaGirl,
    ProfailName :"huyenrubi1997",
    postImg : Beach,
    like : "5,374 likes",  
    postText :'Ý nghĩa của việc cố gắng Chính là khi vận may đến với bạn, Bạn sẽ cảm thấy mình xứng đáng với điều đó Sáng thức dậy ở 1 nơi xa 💙',
    allCommect : 'View all 24 comments',
    Time :'FEBRUARY 8',
},
{
    Profail :RonaldoProfail ,
    ProfailName :"cristiano",
    postImg : RonaldoPost1,
    like : "1,725,112 likes",  
    postText :' Great victory!  #mufc',
    allCommect : 'View all 21,121 comments',
    Time :'MARCH 9',
},
{
    Profail : Therock,
    ProfailName :"huyenrubi1997",
    postImg : Therockselfe,
    like : "1,591,688 likes",    
    postText :'Eagle has landed 🦅 🛬Let’s work.THANK YOU ALL for your incredible ENERGY, CONNECTION & LOVE 🙏🏾💥 🫱🏾‍🫲🏻❤ Love U back and see you down the road! ~ dj#BlackAdam⚡️ @zoaenergy ',
    allCommect : 'View all 26,121 comments',
    Time :'AUGUST 21',
},


]);


return(
<div className="Main">
<div className="Left-Container">
<nav className="Main-contend-Top-Friends-list">
< Profail 
img = {Elomusk}
name = "elonmusk.ab" 
/> 
< Profail 
img = {Sugar}
name = "Dhara__Sugra"
/> 
< Profail 
img = {Zuckerberg}
name = "Zuckerberg's"
/> 
</nav>
{items.map((item) => (

<Post 
Profail = {item.Profail}
ProfailName ={item.ProfailName}
postImg= {item.postImg}
like={item.like}
profailNameText={item.ProfailName}
postText={item.postText}
allCommect={item.allCommect}
Time={item.Time}
/>

))}

</div>
<div className="Right-Container">
<RightHader/>
 <div className="SwwAll-container">
 <span className="Suggestions">Suggestions For You</span>
 <span className="See-All">See All</span>
 </div>
<PopularProfail
img = {Ronaldo}
name = "cristiano_Ronaldo"
type = "Popular"
/>
<PopularProfail
img = {Manu}
name = "Mancheste__Un"
type = "Popular"
/>
<PopularProfail
mark = {<i class="fa-solid fa-check blue"></i> }
img = {No1instgram}
name = "Dines_Rose"
type = "Suggested for you"
/>
<PopularProfail
mark = {<i class="fa-solid fa-check blue"></i> }
img = {Messic}
name = "Messic_ "
type = "Popular"
/>
<PopularProfail
img = {AlanWalker}
name = "Alan Walker"
type = "Popular"
/>
<RightFooter/>
</div>
</div>

)
}
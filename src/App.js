import React from "react";
import Hyu from './huy.png'


export default function Profail(props) {

  return  (<div className="Profile-parents">
    <img src=  {Hyu} className = "stupit" />
    <img className="Friends-Profail"  src={props.img}/>
    <div className="Profile-name">{props.name}</div>
 </div> )
}
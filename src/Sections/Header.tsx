import { useState } from "react";
import MoodSearchbtn from "../components/MoodSearchbtn";
import SearchBar from "../components/SearchBar";

export default function Header (){
  var [nightmode, setnightmode]=useState(true)

  function changeColor() {
    // Get the root element
    const root = document.documentElement;

    // Generate a random color (you can replace this with any color logic)
    const lightbackcolor= '#fff';
    const lightoncolor='#262629';
   const lightminioncolor='#444444';





  const darkbackcolor= '#262629';
 const darkoncolor='#f3f3f3';
const darkminioncolor='#b1b1b1';


if (nightmode){
  // --backcolor: #262629;
  // --oncolor:#f3f3f3;
  // --mini-on-color:#b1b1b1;

  root.style.setProperty('--backcolor', lightbackcolor);
  root.style.setProperty('--oncolor', lightoncolor);
  root.style.setProperty('--mini-on-color', lightminioncolor);

setnightmode((mode)=>{
return !mode
})
}

else{


  root.style.setProperty('--backcolor', darkbackcolor);
  root.style.setProperty('--oncolor', darkoncolor);
  root.style.setProperty('--mini-on-color', darkminioncolor);

  setnightmode((mode)=>{
    return !mode
    })

}









  }
    return(<div className=""> 
    <nav className="header-main">
 
<div onClick={()=>{    changeColor()}} className="night-toggle">
<i className="fa-solid fa-circle-half-stroke"></i>
</div>
  </nav>
    </div>)
}
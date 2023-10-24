import MoodSearchbtn from "../components/MoodSearchbtn";
import SearchBar from "../components/SearchBar";

export default function Header (){

    return(<div className=""> 
    <nav className="header-main">
<SearchBar   />
<MoodSearchbtn text="What's your mood"/>
<div className="header-icon notificatio"><i className="fa-solid fa-bell"></i></div>
    <div className="header-icon settings"> <i className="fa-solid fa-gear"></i></div>
   <div className="user-image"><img src="./user-icon.png" height="100%" width="40px"/></div>
    </nav>
    </div>)
}
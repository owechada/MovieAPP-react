import MoodSearchbtn from "../components/MoodSearchbtn";
import SearchBar from "../components/SearchBar";

export default function Header (){

    return(<div className=""> 
    <nav className="header-main">
<SearchBar   />
 <div className="header-icon notificatio"><i className="fa-solid fa-bell"></i></div>
  </nav>
    </div>)
}
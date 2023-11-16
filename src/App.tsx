import Header from "./Sections/Header";
import 'bootstrap/dist/css/bootstrap.css'; // Import the Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JavaScript
import TopBlob from "./components/TopBlob";
import Section_1 from "./Sections/Section-1";
import Footer from "./Sections/Footer";
import {useState} from 'react'
 

export default function () {
  var [feat,setfeat]=useState({})

    return (<main><Header />
        <div className=" container-fluid topblob">

      <TopBlob f={feat} />
      <h2 className="mh2">Popular movies at the moment</h2>
      <Section_1  setf={setfeat}/>
      <Footer />
        </div>

    </main>)
}
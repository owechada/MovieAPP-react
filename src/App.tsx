import Header from "./Sections/Header";
import SearchBar from "./components/SearchBar";
import 'bootstrap/dist/css/bootstrap.css'; // Import the Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JavaScript
import TopBlob from "./components/TopBlob";
import Section_1 from "./Sections/Section-1";
import Footer from "./Sections/Footer";

export default function () {

    return (<main><Header />
        <div className=" container-fluid topblob">

      <TopBlob />
      <Section_1 />
      <Footer />
        </div>

    </main>)
}
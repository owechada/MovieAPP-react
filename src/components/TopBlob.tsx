// component to show the featured best for today movie

import arraydatas from "../data"


export default function TopBlob(props:any){

    var fallbackImage="./missining_img.jpg"
    const handleImageError = (event:any) => {
        event.target.src = fallbackImage;
      }
     var imgrel="https://image.tmdb.org/t/p/original/" 
    return (<div className=" container-fluid top-blob-main">
<p className="blob-heading">Featured <i className="fa-solid fa-film"></i></p>
    
    <div className="blob-img-cover"></div>
    <img  className="blob-img-holder" src={`${imgrel}${props.f.poster_path}`} alt="Movie poster" onError={handleImageError} />
    <div className="buttom-content">
<h4>{props.f.original_title}</h4>
<p> {props.f. overview}</p><span>Vote count: {props.f.vote_count} </span>
    </div>
    </div>)
}
export default function MovieItem(props:any){
if(!props.object){
return

}
var fallbackImage="./missining_img.jpg"
const handleImageError = (event:any) => {
    event.target.src = fallbackImage;
  }
 var imgrel="https://image.tmdb.org/t/p/original/"
    return (
        <div onClick={()=>{props.movid_hooker_(props.key_)
          props.clickaction()
        }} className="movie-item">
        <img  className="movie-item-image" src={`${imgrel}${props.object.poster_path}`} alt="Movie poster" onError={handleImageError} />
        <h2>{props.object.title}</h2>
        <small>Popularity: {props.object.popularity}</small>
        <p>{props.object.overview}</p>
        
        </div>)
}
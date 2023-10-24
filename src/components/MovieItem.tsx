export default function MovieItem(props:any){
if(!props.object){
return

}

    return (
        <div className="movie-item">
        <img  className="movie-item-image" src="./default-blob-img.jpeg"  />
        <h2>{props.object.title}</h2>
        <small>Box office {props.object.statistics. boxOffice}</small>
        <p>{props.object.description}</p>
        
        </div>)
}
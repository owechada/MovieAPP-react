// component to show the featured best for today movie

import arraydatas from "../data"


export default function TopBlob(props:any){

console.log(props,'props,..')
 
    return (<div className=" container-fluid top-blob-main">
<p className="blob-heading">Featured</p>
    
    <div className="blob-img-cover"></div>
    <img className="blob-img-holder" src="./default-blob-img.jpeg"  />
    <div className="buttom-content">
<h4>{props.f.original_title}</h4>
<p> {props.f. overview}</p><span>Vote count: {props.f.vote_count} </span>
    </div>
    </div>)
}
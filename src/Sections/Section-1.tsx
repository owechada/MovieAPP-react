import MovieItem from "../components/MovieItem"
import PageSelector from "../components/PageSelector."
import SideBar from "../components/SideBar"
import arraydatas from "../data"


var objects=arraydatas

// Each page objects consist of 4 Row items, each row item consists of 3 movie item

 

var Row=(props:any)=>{


    
return(<div className=" row movie-row">
 <div className="col-md-4">
<MovieItem object={props.row_objects[0]}/>
</div>

<div className="col-md-4">
 <MovieItem object={props.row_objects[1]}/>
</div>

<div className="col-md-4">
 <MovieItem object={ props.row_objects[2]  }/>
   
</div>
</div>)

}


// a page takes the first 12 movie items, 
var Page=(props:any)=>{


    return(<div className="page">

<Row row_objects={props.objects_.slice(0,3)} />


<Row row_objects={props.objects_.slice(3,7)}/>


<div>
   <Row row_objects={props.objects_.slice(7,10)}/>
   </div><div>
<Row row_objects={props.objects_.slice(9,13)}/>
</div> 

 </div>)
}


export default function Section_1(){


 
return (<section className=" row section-1">


    
<div className="col-md-2">
<SideBar />
</div>  
    <div className=" page-render col-md-10"> 
    <h2>Popular movies at the moment</h2>
   
    <Page objects_={objects} />

    <PageSelector />
    </div>


 

</section>)
}


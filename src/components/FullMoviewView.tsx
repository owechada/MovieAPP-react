import { Container } from "react-bootstrap";
import { GetMoviewById } from "../Network/Fetch-requests";

export default function FullMovieView(props:any){


    async function gett(){
        var id=props.idd
        var res
        if(id==0){
        }
        else{
        
         res=await GetMoviewById(id);
        }

return res
    }

var res =  gett().then((res)=>{

    res.json()

}).then(ress=>{

    str=ress
})

    return (<Container className="movie-detailed-container">
    <img className="movie-detailed-img"/>
    <p>Title</p>
    <p>Description</p>
    <p>Date</p>
    <div className="detialed-view-bottom">
{res}
    </div>
   
    </Container>)
}
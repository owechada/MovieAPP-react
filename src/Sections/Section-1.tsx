import { useState ,useEffect} from "react"
import  { Row ,Col} from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import MovieItem from "../components/MovieItem"
import PageSelector from "../components/PageSelector."
import SideBar from "../components/SideBar"
import arraydatas from "../data"
import SearchBar from "../components/SearchBar";
import { SearchMovieByTitle ,GetPopularMoview } from "../Network/Fetch-requests";
import Spinner from 'react-bootstrap/Spinner';
import IsLoadingComponent from "../components/IsLoading";
import Noresult from "../components/Noresults";
import Modal from 'react-bootstrap/Modal';
import FullMovieView from "../components/FullMoviewView";
import Progressbar_ from "../components/progressbar.";
 





// Each page objects consist of 4 Row items, each row item consists of 3 movie itef
 


// a page takes the first 12 movie items, 
var Page=(props:any)=>{
  var objects=props.objects_
var [pagenum,setCurpage]=useState(1)
  var datainto_num=  Math.floor(objects.length/9)
var arrarofarr=[]
for(let i=0;i<datainto_num;i++){
arrarofarr.push(objects.slice(9*i,9*(i+1)))

}
 useEffect(()=>{
setCurpage(1)
 },[])
 
var currpagedata=arrarofarr[(pagenum-1)]?arrarofarr[(pagenum-1)]:[];
   
    return(<>
     <Container className="movie-item-container">
       
    <Row className="movie-row" xs={1} md={2} xl={3}>

    {currpagedata.map((item :any,keyy:any)=>{
   
    return(<Col key ={keyy}><MovieItem movid_hooker_={props.movid_hooker} clickaction={props.itemclick} key_ ={item.id} object={item} /></Col>)
  
    
    })}
    
    </Row>

    
    <PageSelector handler={ setCurpage} numpages={datainto_num}  />
    </Container>
    
    </>)
}


export default   function Section_1(props){
var [resultisEmpty,setresultisEmpty]=useState(false)
  var [objects,setOBJ]=useState(arraydatas)
var [idf,setidf]=useState(0)
var [movid,setmovid]=useState(0)
var [showmodal,setDetiledviewShow]=useState(false)
var [now_,setnow]=useState(1)
var [featuerd, setfeatured]=useState({})


  var [isloading,Setisloading]=useState(true)
let searchvalue:string;
function getSearchvalue(search:any ){

searchvalue=search

}


 

async function  init(){


  const prerandomNumber = Math.floor(Math.random() * 20)
  console.log(prerandomNumber,'rand dnmdndnnd')
props.setf(arraydatas[1])
  
  let c= await GetPopularMoview(setnow)
 

  
  const randomNumber = Math.floor(Math.random() * 50)

  props.setf(c[randomNumber])
  console.log(c[randomNumber])
  
 

var results=c

    if (results.length==0 || results[0].length==0){
      setresultisEmpty(true)
      
      
        }
      else{
        setresultisEmpty(false)
        console.log(results.length,'lll')
      }
      
        setOBJ(results.slice(1))
        Setisloading(false)
      
 


}
 
async function onSearchEnter(){

console.log(searchvalue)
Setisloading(true)



var  results= await SearchMovieByTitle(searchvalue,setnow)

  console.log(results[0],"results")


  if (results.length==0 || results[0].length==0){
setresultisEmpty(true)


  }
else{
  setresultisEmpty(false)
  console.log(results.length,'lll')
}

  setOBJ(results.slice(1))
  Setisloading(false)


}
 

 



useEffect(()=>{
init()

},[idf])

return (<section className=" row section-1">


    
<div className="col-md-1">
 
</div>  
    <div className=" page-render col-md-10"> 

    <SearchBar onSearchEnter={onSearchEnter}  getValue={getSearchvalue} />
   
{   isloading? <div><Progressbar_  now_={now_}/><IsLoadingComponent/></div>: (resultisEmpty? <Noresult />:<Page itemclick={()=>{
  setDetiledviewShow(true)
}} movid_hooker={setmovid} objects_={objects} />)}

<Modal show={showmodal} fullscreen={true } onHide={() => setDetiledviewShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Moview detailed view {movid}</Modal.Title>
    </Modal.Header>
    <Modal.Body><FullMovieView idd={movid} /></Modal.Body>
  </Modal>


    </div>


 

</section>)
}


import {useState} from 'react'
export default function SearchBar (props:any){
var [value, setvalue]=useState("");


function update(event:any){

    
setvalue(event.target.value);

props.getValue(event.target.value)

if(event.key=="Enter"){
    props.onSearchEnter()
}
}
    return (<div className="header-search" >
<span className="vr"></span>
<i className="fa-solid fa-magnifying-glass"></i>
<input   onKeyDown={update} type="text" placeholder="Instastlella, Top 10 Actio....Harry potter" className="search-bar-input"/>
    </div> 
       )
}
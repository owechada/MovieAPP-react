var  numpages=10;


var PageItem=(props:any)=>{


    return (<div className="page-item">

{props.num}

    </div>)
}


export default function PageSelector(){


    var p=[]
for(let i=1; i<=numpages;i++){

p.push(i)
}


    return (<div className="container-fluid page-selector">
    
{ p.map((item)=>{

    return(< PageItem num={item}/>)
})}
    </div>)
}
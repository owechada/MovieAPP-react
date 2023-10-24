// component to show the featured best for today movie



export default function TopBlob(props:any){



    return (<div className=" container-fluid top-blob-main">
<p className="blob-heading">Best of the day</p>
    
    <div className="blob-img-cover"></div>
    <img className="blob-img-holder" src="./default-blob-img.jpeg"  />
    <div className="buttom-content">
<h4>Title of movie</h4>
<p>Subheading</p><span>Basic statistics </span>
    </div>
    </div>)
}
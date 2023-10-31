

import { setUseProxies } from 'immer';
import React, { useState, useEffect } from 'react';



var ActionBtn = (props: any) => {

    return (<><div onClick={props.action} className="page-item">
        {props.cont}
    </div></>)
}

var RefreshBtn = (props: any) => {

    return (<><div onClick={props.action} className="page-item">
        <i className="fa-solid fa-arrow-rotate-right fa-flip-horizontal"></i>
    </div></>)
}


var DotBtn = (props: any) => {

    return (<><div onClick={props.action} className="page-item">
        <i className="fa-solid fa-ellipsis"></i>
    </div></>)
}
var PageItem = (props: any) => {


    return (<div onClick={props.onclick} className={props.isactive ? ("page-item-active page-item") : "page-item"} >

        {props.num}

    </div>)
}


export default function PageSelector(props:any) {

    var [curpage, setCurpage] = useState(1)
function    middleware(){

props.handler(curpage)

}

    useEffect(() => {
        console.log("page.... changed",curpage)
        middleware();
      }, [curpage]); 
    var numpages = props.numpages;
    function nextPage() {
 if(!(curpage==numpages)){
        setCurpage(prevpage => {

          return prevpage + 1
        })
    }
    }

    function repage() {
        setCurpage(1)
       props.page_action(1)

    }

    var changepage = (page: any) => {
         setCurpage(parseInt(page))
    }
    function prevpage() {
        if (!((curpage) == 1) ) {
            setCurpage(prevpage => {


                return prevpage - 1
            }


            )
        }


    }
    var p = []
    for (let i = 1; i <= numpages; i++) {

        p.push(i)
    }

    let prenumpages = []
    let prenumdotcount = 0;
    let postnumdotcount = 0;

    for (let i = 0; i <= 2; i++) {
        prenumpages.push(curpage + i)
        prenumpages.push(curpage - i)
    }
    

    return (<div className="container-fluid page-selector">
        <RefreshBtn action={repage} />
        <ActionBtn action={prevpage} cont={"◀"} />

        {p.map((item, key) => {
            if (prenumpages.includes(key + 1)) {
                return (< >

                    <PageItem onclick={() => changepage(key + 1)} isactive={(curpage == key + 1) ? true : false} num={item} />
                </>)
            }

            else if ((key) >= (p.length - 3)) {
                return (
                    <PageItem onclick={() => changepage(key + 1)} isactive={(curpage == key + 1) ? true : false} num={item} />
                )
            }

            else if (key < curpage && prenumdotcount < 1) {

                prenumdotcount++
                return (<div><DotBtn action={() => { setCurpage(p => { return p - 5 }) }} /></div>)



            }

            else if (key > curpage && postnumdotcount < 1) {

                postnumdotcount++
                return (<div><DotBtn action={() => { setCurpage(p => { return p + 5 }) }} /></div>)



            }
        })}
        <ActionBtn action={nextPage} cont={"▶"} />
    </div>)
}
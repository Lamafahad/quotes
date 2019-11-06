import React from 'react';

const Fav = (props) => {

    let mainPage;
    if(props.mylist.length == 0){
        mainPage = <h1>you dont have any favourite</h1>
    }

    else{
        mainPage = props.mylist.map((item,i)=> {
            return     <div  key={i} className="card border-secondary mb-3" style={{maxWidth: "400px"}} >
                           <div class="card-body text-secondary">
                            <h5 className="card-title">{item.quote}</h5>
                            <p className="card-text">{item.author}</p>
                        </div>
                        <button className="btn btn-primary" className='btn btn-warning' onClick={()=>props.clearItem(item)} >Clear </button>
                     </div>
        })
    }
    return(
     <div>
        <div className="card-deck">
         {mainPage}
         </div>
     <button class="btn btn-light" onClick={()=>props.clearAll()}> Clear All </button>
     </div>
    );
}






export default Fav;

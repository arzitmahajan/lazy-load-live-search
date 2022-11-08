import React from 'react';
import './Item.css';
const Item = (props) => {
    return (
        // <div className="card" style={{width: "18rem"}}>
        //     <img src={props.urlImage} style={{height: "10rem"}}className="card-img-top" alt="not found"/>
        //         <div className="card-body">
        //             <h5 className="card-title">{props.title}</h5>
        //             <p className="card-text">{props.desc}</p>
        //             <a href={props.url}  target="_blank" className="btn btn-primary">Check Post</a>
        //         </div>
        // </div>

    <div className='my-3'>
    <div className="card">
        <img src={props.urlImage} height="200px" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
    </div> 
    </div>   
    )
}

export default Item;
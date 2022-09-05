import React from 'react'
export default function Details(props){
    return(
        <span className='border p-2'>
            <div className="detail-header">{props.title}</div>
            <input className="name-bar" type="text" placeholder={props.description}></input>     
        </span>
    );
}
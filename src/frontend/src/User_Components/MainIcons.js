import React from 'react'
import { Link } from 'react-router-dom';

export default function MainIcons(props){
    return (
        
        <Link className="card" to={props.path} style={{
            textDecoration: 0,
            color: 'black',
        }}>
            <img className="card-img-top" src={props.img} alt="Loading..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </Link>
    );
}
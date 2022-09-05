import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props){
    return(
        <div className="container-fluid bg-light mb-4 d-flex align-items-center justify-content-between shadow-sm p-1 pt-3 pb-3">
            <div className="logo">
                <div className="row w-100 m-0 p-0">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Indian_Institute_of_Technology_Tirupati_Logo.svg/640px-Indian_Institute_of_Technology_Tirupati_Logo.svg.png" alt="Loading Img..."></img>                                
                </div> 
            </div>
            <h3 className="main_header">{props.title}</h3>  
            <div>
                <Link className="btn btn-primary mx-2">Logout</Link>
            </div>  
        </div>
    );
    
}
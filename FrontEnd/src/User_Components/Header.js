import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props){
    return(
        <div className="container-fluid h-10 bg-light mb-5 d-flex align-items-center justify-content-between shadow-sm p-3">
            <div className="logo">
                <div className="row w-100 m-0">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Indian_Institute_of_Technology_Tirupati_Logo.svg/640px-Indian_Institute_of_Technology_Tirupati_Logo.svg.png"></img>                                
                </div> 
            </div>
            <h2 className="main_header">{props.title}</h2>  
            <div>
                <Link className="headerLinks">Logout</Link>
            </div>  
        </div>
    );
    
}
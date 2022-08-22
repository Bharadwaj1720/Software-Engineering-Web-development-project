import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'
export default function Main(){
    return(
        <div>
            <Header 
                title="IIT TIRUPATI ERP"
            />
            <div className="container-fluid h-100 text-dark bg-light d-block">
                <div className="row justify-content-center">
                    <Link className="col-6 col-md-3 btn btn-info m-2 text-light" to="health-center">Health Center</Link>
                </div>
                <div className="row justify-content-center">
                    <Link className="col-6 col-md-3 btn btn-info m-2 text-light" to="library">Library</Link>
                </div>
            </div>
        </div>
    );
    
}
// Main page
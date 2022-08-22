import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'
import Buttons from './Buttons'
export default function Main(){
    return(
        <div>
            <Header 
                title="IIT TIRUPATI ERP"
            />
            <div className="container-fluid h-100 text-dark bg-light d-block">
                <Buttons title="Health Center" path="health-center" />
                <Buttons title="Library" path="library" />
            </div>
        </div>
    );
    
}
// Main page
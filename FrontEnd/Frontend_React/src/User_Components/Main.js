import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'
const linkAddress = "https://wallpaperaccess.com/full/4952578.jpg";
const lib = "https://images6.alphacoders.com/872/thumb-1920-872784.jpg"

export default function Main(){
    return(
        <div>
            <Header 
                title="IIT Tirupati E-Governance Portal"
            />
            <div className="main-grid">
                <div class="box">
                    <Link className="main-links" to="health-center">
                        <img className="healthcenter-logo" src={linkAddress} alt="Loading..."></img>
                        <div className="name-box">
                            <p className="logo-name">Health Center</p>
                        </div>
                    </Link>
                </div>
                
                <div class="box">
                    <Link className="main-links" to="library">
                        <img className="healthcenter-logo" src={lib} alt="Loading..."></img>
                        <div className="name-box">
                            <p className="logo-name">Library</p>
                        </div>
                        
                    </Link>
                </div>

                <div class="box">
                    <Link className="main-links" to="health-center">
                        <img className="healthcenter-logo" src={linkAddress} alt="Loading..."></img>
                        <div className="name-box">
                            <p className="logo-name">Health Center</p>
                        </div>
                    </Link>
                </div>

                <div class="box">
                    <Link className="main-links" to="library">
                        <img className="healthcenter-logo" src={lib} alt="Loading..."></img>
                        <div className="name-box">
                            <p className="logo-name">Library</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
    
}
// Main page
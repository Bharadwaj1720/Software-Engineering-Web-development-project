import React from 'react'
import Header from './Header'
import MainIcons from './MainIcons'

export default function Main(){
    return(
        <div>
           <Header 
                title="IIT Tirupati ERP Portal"
           />
            <div className="main-grid">

                <MainIcons 
                    path = "health-center"
                    img = "https://wallpaperaccess.com/full/4952578.jpg"
                    title = "Health Center"
                />

                <MainIcons 
                    path = "library"
                    img = "https://images6.alphacoders.com/872/thumb-1920-872784.jpg"
                    title = "Library"
                />

                <MainIcons 
                    path = "vehicle-management"
                    img = "https://images6.alphacoders.com/872/thumb-1920-872784.jpg"
                    title = "Vehicle Management"
                />
            </div>
        </div>
    );
    
}
// Main page
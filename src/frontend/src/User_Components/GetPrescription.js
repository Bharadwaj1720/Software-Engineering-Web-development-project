import React from 'react'
import Header from './Header'
import Details from './Details'

export default function GetPrescription() {
    return (
        <div>
            <Header title="Get a Prescription" />
            <div className="details">
                <Details 
                    title="Name"
                    description="Enter your Name"
                />
                <Details 
                    title="Age"
                    description="Enter your Age"
                />
            </div>

        </div>
    );
}
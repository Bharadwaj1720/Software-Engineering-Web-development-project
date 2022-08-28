import React from 'react'
import Header from './Header'

export default function DoctorAppointment() {
    return (
        <div>
            <Header title="Book Appointment" />
            <div className="details">
                <span className='border p-2'>
                    <span className="detail-header">Name:</span>
                    <input className="name-bar" type="text" placeholder="Enter your Name"></input>
                </span>
                <span className='border p-2'>
                    <span className="detail-header">Age:</span>
                    <input className="name-bar" type="text" placeholder="Enter your Age"></input>
                </span>
            </div>

        </div>
    );
}
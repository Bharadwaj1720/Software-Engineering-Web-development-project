import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
export default function Health_Center(){
    return(
        <div>
          <Header title="Health Center" />
          <div className="container-fluid h-100 text-dark bg-light d-block" style={{
            
          }}>
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">Doctor Details</button>
          </div>
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">Availability Timings</button>
          </div>
          <div className="row justify-content-center">
              <Link className="col-6 col-md-3 btn btn-info m-2 text-light" to="health-center/book-appointment">Book Appointment</Link>
          </div>
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">Get a Prescription</button>
          </div>
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">Medical Records</button>
          </div>
        </div>
      </div>
    );
}
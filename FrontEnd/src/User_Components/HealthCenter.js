import React from 'react'
import Header from './Header'
import Buttons from './Buttons'
export default function HealthCenter(){
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
          <Buttons title="Book Appointment" path="health-center/book-appointment" />
          <Buttons title="Get Prescription" path="health-center/get-prescription" />
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">Medical Records</button>
          </div>
        </div>
      </div>
    );
}
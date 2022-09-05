import React from 'react'
import Header from './Header'
import Buttons from './Buttons'
export default function HealthCenter(){
    return(
        <div>
          <Header title="Health Center" />
          <div className="container-fluid h-100 text-dark bg-light d-block" style={{
            
          }}>
          <Buttons title="Availability Timings" path="health-center/availability-timings" />
          <Buttons title="Book Appointment" path="health-center/book-appointment" />
          <Buttons title="Get Prescription" path="health-center/get-prescription" />
          <Buttons title="Medical Records" path="health-center/medical-records" />
        </div>
      </div>
    );
}
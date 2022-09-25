import React, {useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
export default function Health(){
    


    return(
        <div>
          <Header title="Appointment Booking" />
          <div className="container">
            <form className="p-4 appointmentForm">
              
              <div className="form-group row">
              
                <div className="form-group col-md-6 top">
                  <label for="appointment-id">Appointment ID</label>
                  <input className="form-control" type="text" placeholder="SA756" id="appointment-id" readOnly ></input>
                </div>

                <div className="form-group col-md-6 top">
                  <label for="appointment-date">Date</label>
                  <input type="date" className="form-control" id="appointment-date" required />
                </div>

              </div>

            <div className="form-group row">

              <div className="form-group col-md-6 middle">
                <label for="appointment-doc-name">Doctor Name</label>
                <select className="form-control" required >
                  <option>Doc1</option>
                  <option>Doc2</option>
                </select>
              </div>

              <div className="form-group col-md-6 middle">
                <label for="appointment-time">Appointment Time</label>
                <input type="time" class="form-control" id="appointment-time" required />
              </div>
            </div>
          
              <div className="form-group bottom">
                <label for="cause-of-visit">Cause of Visit</label>
                <textarea className="form-control" rows="3" id="cause-of-visit" required />
              </div>
              
              
              <button type="submit" class="btn btn-primary mt-4 mb-2 submit-button d-block mx-auto">Submit</button>
              <div className="d-flex justify-content-center">
                <Link className="btn btn-danger" to="">Cancel</Link>
              </div>
              
              
            </form>
          </div>
          
         
        </div>
    );
}
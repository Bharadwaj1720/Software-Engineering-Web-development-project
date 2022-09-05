import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';
export default function BookVehicle(){
    return (
        <div>
            <Header title="Book a Vehicle"/>
            <div style={{
            marginTop: 5,
            marginRight: 20
          }}>
            <h6 className="d-flex justify-content-center mb-4">Vehicle Booking</h6>
            <div className="container">
              <div className="vehicle-grid">
                <p>Vehicle :</p>
                <select class="form-select form-select-sm" style={{
                  height: 30
                }}>
                <option selected>Select</option>
                <option value="1">Car1</option>
                <option value="2">Car2</option>
                </select>
              </div>
              <div className="vehicle-grid">
                <p>Guest :</p>
                <input className="name-bar" type="text" placeholder=""></input>    
              </div>
              <div className="vehicle-grid">
                <p>Journey From :</p>
                <input className="name-bar" type="text" placeholder="Start location"></input>    
              </div>
              <div className="vehicle-grid">
                <p>Journey To :</p>
                <input className="name-bar" type="text" placeholder="Destination"></input>    
              </div>
              <div className="vehicle-grid">
                <p>Journey Date :</p>
                <input className="name-bar" type="text" placeholder=""></input>    
              </div>
              <div className="vehicle-grid">
                <p>Affiliation :</p>
                <input className="name-bar" type="text" placeholder=""></input>    
              </div>
              <div className="vehicle-grid">
                <p>Estimates :</p>
                <input className="name-bar" type="text" placeholder="Enter the amount in ₹"></input>    
              </div>
              <div className="vehicle-down-options" style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: 15,
                marginRight: 15
              }}>
                <Link className="book-appointment" to="vehicle-management" style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginLeft: 5,
                  textDecoration: 'none'
                }}>Cancel</Link>
                <button className="submit-appointment" style={{
                  paddingLeft: 10,
                  paddingRight: 10
                }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        
    );
}
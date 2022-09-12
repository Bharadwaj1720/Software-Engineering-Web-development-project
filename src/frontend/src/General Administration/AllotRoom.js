import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';
export default function AllotRoom(){
    return (
        <div>
            <Header title="Allot Room"/>
            <div style={{
            marginTop: 5,
            marginRight: 20
          }}>
            <h6 className="d-flex justify-content-center mb-4">Booking a Room</h6>
            <div className="container">
              <div className="vehicle-grid">
                <p>Room No. :</p>
                <select class="form-select form-select-sm" style={{
                  height: 30
                }}>
                <option selected>Select</option>
                <option value="1">102</option>
                <option value="2">202</option>
                <option value="2">203</option>
                </select>
              </div>
              <div className="vehicle-grid">
                <p>Guest :</p>
                <input className="name-bar" type="text" placeholder=""></input>    
              </div>
              <div className="vehicle-grid">
                <p>Checkin Date :</p>
                <input className="name-bar" type="text" placeholder=""></input>    
              </div>
              <div className="vehicle-grid">
                <p>Checkout Date :</p>
                <input className="name-bar" type="text" placeholder=""></input>    
              </div>
              <div className="vehicle-grid">
                <p>Room Type :</p>
                <select class="form-select form-select-sm" style={{
                  height: 30
                }}>
                <option selected>Normal</option>
                <option value="1">2 BHK</option>
                <option value="2">3 BHK</option>
                </select>
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
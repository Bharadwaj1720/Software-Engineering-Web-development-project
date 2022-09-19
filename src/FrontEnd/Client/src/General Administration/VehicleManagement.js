import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
export default function VehicleManagement(){
    return (
        <div>
            <Header 
                title = "Vehicle Management"
            /><div className="container-fluid h-100 text-dark bg-light d-block" style={{
            
            }}>
            
              <div>
                <div className="p-3">
                  <h6 className="d-inline-block p-2" style={{
                    backgroundColor: 'lightgray',
                    color: 'darkred'
                    
                  }}>Vehicle Management Records</h6>
                  <p className="p-1 mb-2" style={{
                    fontWeight: 500,
                    backgroundColor: 'skyblue'
  
                  }}>Vehicle can be booked from this interface</p>
  
                  <div className="d-flex align-items-center justify-content-between p-2" style={{
                    borderColor: 'gray',
                    borderStyle: 'solid',
                    borderWidth: 1
                  }}>
                    <div>
                      <span className="detail-header" style={{
                          width: 60
                      }}>Status</span>
                      <select class="form-select form-select-sm" style={{
                          width: 200,
                          display: 'inline-block'
                          }}>
                          <option selected>Draft</option>
                          <option value="1">Submitted</option>
                          <option value="2">Confirmed</option>                       
                          <option value="4">Cancelled</option>
                      </select>
                    </div>
                    <div>
                      <Link className="doc-timings-link"to="vehicle-availability">Available Vehicles</Link>
                      <Link className="book-appointment" to="book-vehicle" style={{
                        textDecoration: 'none',
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginLeft: 5
                      }}>Book Vehicle</Link>
                    </div>
                    
                  </div>
                  <table class="table table-bordered" style={{
                    marginTop: 10
                  }}>
                      <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Travel ID</th>
                              <th scope="col">Guest</th>
                              <th scope="col">From Date</th>
                              <th scope="col">To Date</th>
                              <th scope="col">Journey from</th>
                              <th scope="col">Journey to</th>
                              <th scope="col">Mode of Travel</th>
                              <th scope="col">Applied Date</th>
                              <th scope="col">Approved by</th>
                              <th scope="col">Approved Date</th>
                              <th scope="col">Estimates</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>RD17T</td>
                              <td>Sundar Pichai</td>
                              <td>10-10-2022</td>
                              <td>16-10-2022</td>
                              <td>New York</td>
                              <td>Delhi</td>
                              <td>Flight</td>
                              <td>01-10-2022</td>
                              <td>Prof. P1</td>
                              <td>02-10-2022</td>
                              <td>₹30,000</td>
                          </tr>
                        
                      </tbody>
                  </table>
                </div>
                
              </div>
  
            </div>
            
        </div>
    );
}
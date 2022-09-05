import React, {useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
export default function Health(){
    const [addNew, setAddNew] = useState(0);
    


    return(
        <div>
          <Header title="Health" />
          <div className="container-fluid h-100 text-dark bg-light d-block" style={{
            
          }}>
          
            <div className="medical-grid">
              <div className="p-3" style={{
                borderRight: 1,
                borderLeft: 0,
                borderTop: 0,
                borderBottom: 0,
                borderColor: 'black',
                borderStyle: 'solid'
              }}>
                <h6 className="d-inline-block p-2" style={{
                  backgroundColor: 'lightgray',
                  color: 'darkred'
                  
                }}>Student Medical Records</h6>
                <p className="p-1 mb-2" style={{
                  fontWeight: 500,
                  backgroundColor: 'skyblue'

                }}>Doctor Appointment can be booked from this interface</p>

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
                        <option value="3">Send back</option>
                        <option value="4">Cancelled</option>
                        <option value="5">Consultation Completed</option>
                        <option value="6">Patient did not visit</option>
                        <option value="7">Test Results awaiting</option>
                    </select>
                  </div>
                  <div>
                    <Link className="doc-timings-link"to="health-center/doc-availability">Doctor Availability</Link>
                    <button className="book-appointment" onClick={() => {setAddNew(1); console.log(addNew)}}>Add New</button>
                  </div>
                  
                </div>
                <table class="table table-bordered" style={{
                  marginTop: 10
                }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Appointment ID</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Apoointment Date</th>
                            <th scope="col">Appointment Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>AD45T</td>
                            <td>Puppala Vishnu Vardhan</td>
                            <td>03-08-2022</td>
                            <td>4:00 PM</td>
                        </tr>
                      
                    </tbody>
                </table>
              </div>
              <div className="bg-light">
              
              {
                addNew ?
                  <div style={{
                    marginTop: 5,
                    marginRight: 20
                  }}>
                    <h6 className="d-flex justify-content-center mb-4">Medical Appointment</h6>
                    <div className="form-grid">
                      <p>Appointment ID :</p>
                      <input className="name-bar" type="text" placeholder=""></input>    
                    </div>
                    <div className="form-grid">
                      <p>Appointment Date :</p>
                      <input className="name-bar" type="text" placeholder="Enter the Date"></input>    
                    </div>
                    <div className="form-grid">
                      <p>Doctor :</p>
                      <select class="form-select form-select-sm" style={{
                        height: 30
                      }}>
                        <option selected>Select</option>
                        <option value="1">Doc1</option>
                        <option value="2">Doc2</option>
                      </select>
                    </div>
                    <div className="form-grid">
                      <p>Appointment Time :</p>
                      <input className="name-bar" type="text" placeholder="Enter the Time"></input>    
                    </div>
                    <div className="form-grid">
                      <p>Cause of Visit :</p>
                      <input className="name-bar" type="text" placeholder="" style={{
                        height: 50
                      }}></input>    
                    </div>
                    <div className="" style={{
                      height: 190
                    }}></div>
                    <div className="form-down-options" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginLeft: 15,
                      marginRight: 15
                    }}>
                      <button className="book-appointment" onClick={() => {setAddNew(0);}} style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginLeft: 5
                      }}>Cancel</button>
                      <button className="submit-appointment" style={{
                        paddingLeft: 10,
                        paddingRight: 10
                      }}>Submit</button>
                    </div>
                  </div>:
                  null
              }
              </div>
              
            </div>

          </div>
        </div>
    );
}
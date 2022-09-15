import React from "react";
import { Link } from 'react-router-dom';
import Layout from "../Layout";

export default function GuestHouseManagement() {
  return (
    <div>
      <Layout message="Guest House Management" />
      <div className="container-fluid h-100 text-dark bg-light d-block" style={{
        marginTop: 100,
        marginLeft: 60,
        marginRight: 20

      }}>

        <div>
          <div className="p-3">
            <h6 className="d-inline-block p-2" style={{
              backgroundColor: 'lightgray',
              color: 'darkred'

            }}>Guest House Management Records</h6>
            <p className="p-1 mb-2" style={{
              fontWeight: 500,
              backgroundColor: 'skyblue'

            }}>Rooms in Guest House can be booked from this interface</p>

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
                <Link className="doc-timings-link" to="AvailableRooms">Available Rooms</Link>
                <Link className="book-appointment" to="AllotRoom" style={{
                  textDecoration: 'none',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginLeft: 5
                }}>Allot a Room</Link>
              </div>

            </div>
            <table class="table table-bordered" style={{
              marginTop: 10
            }}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Request No.</th>
                  <th scope="col">Guest</th>
                  <th scope="col">Applied Date</th>
                  <th scope="col">Request By</th>
                  <th scope="col">Room Type</th>
                  <th scope="col">No. of Rooms</th>
                  <th scope="col">Official or Personal</th>
                  <th scope="col">Check in Date</th>
                  <th scope="col">Check out Date</th>
                  <th scope="col">Event or Purpose</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Pay Now</th>
                  <th scope="col">Approved Date</th>
                  <th scope="col">Approved By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>RE45P</td>
                  <td>Sundar Pichai</td>
                  <td>10-09-2022</td>
                  <td>Director, IIT Tirupati</td>
                  <td>2 BHK</td>
                  <td>3</td>
                  <td>Official</td>
                  <td>15-09-2022</td>
                  <td>17-09-2022</td>
                  <td>Ted Talk</td>
                  <td>₹1,00,000</td>
                  <td>Not Paid</td>
                  <td>
                    <Link className="pay-button" style={{
                      textDecoration: 'none',
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}>Pay</Link>
                  </td>
                  <td>11-09-2022</td>
                  <td>Guest House Manager</td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
}
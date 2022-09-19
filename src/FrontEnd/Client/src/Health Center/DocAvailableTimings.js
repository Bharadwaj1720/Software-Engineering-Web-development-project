import React from "react";
import Header from './Header'
export default function DocAvailableTimings(){
    return (
        <div>
            <Header 
                title="Doctor Availability Timings"
            />
            <div class="p-3">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S No.</th>
                            <th scope="col">From Date</th>
                            <th scope="col">To Date</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>02-08-2022</td>
                            <td>02-08-2022</td>
                            <td>Puppala Vishnu Vardhan</td>
                            <td>9:00 AM</td>
                            <td>9:00 PM</td>
                            <td>-</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>03-08-2022</td>
                            <td>03-08-2022</td>
                            <td>Vuppala Bharadwaj</td>
                            <td>9:00 AM</td>
                            <td>9:00 PM</td>
                            <td>-</td>
                            <td>Inactive</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    );
}
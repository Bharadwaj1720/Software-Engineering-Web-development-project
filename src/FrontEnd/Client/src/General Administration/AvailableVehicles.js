import React from "react";
import Layout from "../Layout";
export default function AvailableVehicles() {
    return (
        <div>
            <Layout message="Available Vehicles" />
            <div className="Book_Search">
                <div class="p-3">
                    <table class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">S No.</th>
                                <th scope="col">Vehicle No.</th>
                                <th scope="col">Type</th>
                                <th scope="col">From Date</th>
                                <th scope="col">From Time</th>
                                <th scope="col">To Date</th>
                                <th scope="col">To Time</th>
                                <th scope="col">Vehicle Condition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>AP 09 TP 5189</td>
                                <td>Car</td>
                                <td>02-08-2022</td>
                                <td>9:00 AM</td>
                                <td>04-08-2022</td>
                                <td>9:00 PM</td>
                                <td>Good</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}
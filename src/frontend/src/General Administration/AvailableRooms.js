import React from "react";
import Header from './Header'
export default function AvailableRooms(){
    return (
        <div>
            <Header 
                title="Available Rooms"
            />
            <div class="p-3">
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">S No.</th>
                            <th scope="col">Room No.</th>
                            <th scope="col">Room Type</th>
                            <th scope="col">Floor</th>
                            <th scope="col">Amount per day</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <th scope="row">1</th>
                            <td>102</td>
                            <td>3 BHK</td>
                            <td>1st Floor</td>
                            <td>₹800</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>202</td>
                            <td>3 BHK</td>
                            <td>2nd Floor</td>
                            <td>₹800</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>203</td>
                            <td>2 BHK</td>
                            <td>2nd Floor</td>
                            <td>₹600</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    );
}
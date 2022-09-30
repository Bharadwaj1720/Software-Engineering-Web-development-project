import React from "react";
import Header from './Header';

export default function StudentMedicalRecords(){
    return(
        <div>
            <Header title="Medical Records"/>
            <div className="container px-5 py-1">
                <table className="table w-100">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Appointment ID</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Appointment Date</th>
                            <th scope="col">Appointment Time</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-light">
                        <tr>
                            <th scope="row">1</th>
                            <td>TS491</td>
                            <td>Sujeeth</td>
                            <td>22-09-2022</td>
                            <td>10:50</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>UB251</td>
                            <td>Hellas</td>
                            <td>09-08-2022</td>
                            <td>17:30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
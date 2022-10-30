import React, {useState, useEffect} from "react";
import Header from './Header';

const Record = (props) => (
    <tr>
      <td>{props.record.ID}</td>
      <td>{props.record.date}</td>
      <td>{props.record.doctor}</td>
      <td>{props.record.time}</td>
      <td>{props.record.cause}</td>
      <td>
        <button className="btn btn-link p-0" onClick={() => {
          props.deleteRecord(props.ID);
        }} style={{
          textDecoration: "none"
        }}>Delete</button>
      </td>
    </tr>
);

export default function StudentMedicalRecords(){
    const [records, setRecords] = useState([]);
    
    useEffect(() => {
        async function getRecords() {
          const response = await fetch(`http://localhost:5000/appointments`);
      
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
      
          const records = await response.json();
          console.log(records.name)
          setRecords(records.name);
        }
      
        getRecords();
      
        return;
      }, [records.length]);


      async function deleteRecord(id) {
        console.log("Function call");
        await fetch(`http://localhost:5000/${id}`, {
          method: "DELETE"
        });
        console.log("Deleted!");
        window.location.reload();
        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
      }

      
      // This method will map out the records on the table
      function recordList() {
        return records.map((record) => {
          return (
            <Record
              record={record}
              deleteRecord={() => deleteRecord(record.ID)}
              key={record._id}
            />
          );
        });
      }

    return(
        <div>
            <Header title="Medical Records"/>
            <div className="container px-5 py-1">
                <table className="table w-100">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th scope="col">Appointment ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Appointment Time</th>
                            <th scope="col">Cause</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-light">
                        {recordList()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
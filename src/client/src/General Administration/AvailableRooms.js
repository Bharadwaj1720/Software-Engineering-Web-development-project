import React, {useState, useEffect} from "react";
import Header from './Header'

const Room = (props) => (
    <tr>
      <td>{props.record.sno}</td>
      <td>{props.record.roomno}</td>
      <td>{props.record.type}</td>
      <td>{props.record.capacity}</td>
      <td>{props.record.floor}</td>
    </tr>
);

export default function AvailableRooms(){
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        async function getRooms() {
          const response = await fetch(`http://localhost:5000/`);
      
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
      
          const records = await response.json();
          console.log(records.name)
          setRooms(records.name);
        }
      
        getRooms();
      
        return;
      }, [rooms.length]);

      function roomList() {
        return rooms.map((room) => {
          return (
            <Room
              room={room}
              //deleteRecord={() => deleteRecord(record._id)}
              key={room._id}
            />
          );
        });
      }

    return (
        <div>
            <Header title="Medical Records"/>
            <div className="container px-5 py-1">
                <table className="table w-100">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Room No.</th>
                            <th scope="col">Type</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Floor</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-light">
                        {roomList()}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
}
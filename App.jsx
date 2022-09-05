import React from 'react'
import {useState, useEffect} from 'react'
import Library from './User_Components/Library'
import Main from './User_Components/Main'
import Health from './User_Components/Health'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DoctorAppointment from './User_Components/DoctorAppointment'
import GetPrescription from './User_Components/GetPrescription'
import StMedicalRecords from './User_Components/StMedicalRecords'
import DocAvailableTimings from './User_Components/DocAvailableTimings'
import VehicleManagement from './User_Components/VehicleManagement'
import AvailableVehicles from './User_Components/AvailableVehicles'
import BookVehicle from './User_Components/BookVehicle'

import {getTest} from './functions/test'

function App() {
  // const [data, setData] = useState("Hello World!");
  // useEffect(() => {
  //     getTest()
  //       .then((res) => {
  //         setData(res.message);
  //       })
  //       .catch((err) => console.log(err));
  // }, []);
    return (
      <div className="App">
        {/* <h1>{data}</h1> */}
        <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
            <Route exact path="/library">
              <Library/>
          </Route>
          <Route exact path="/health-center">
              <Health/>
          </Route>
          <Route exact path="/health-center/book-appointment">
              <DoctorAppointment/>
          </Route>
          <Route exact path="/health-center/get-prescription">
              <GetPrescription/>
          </Route>
          <Route exact path="/health-center/medical-records">
              <StMedicalRecords/>
          </Route>
          <Route exact path="/health-center/doc-availability">
              <DocAvailableTimings/>
          </Route>
          <Route exact path="/vehicle-management">
              <VehicleManagement/>
          </Route>
          <Route exact path="/vehicle-availability">
              <AvailableVehicles/>
          </Route>
          <Route exact path="/book-vehicle">
              <BookVehicle/>
          </Route>
        </Switch>
      </Router>
      </div>
      
    );
}

export default App;


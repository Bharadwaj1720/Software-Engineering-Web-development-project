import React from 'react'
import Library from './User_Components/Library'
import Main from './User_Components/Main'
import HealthCenter from './User_Components/HealthCenter'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DoctorAppointment from './User_Components/DoctorAppointment'
import GetPrescription from './User_Components/GetPrescription'

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
            <Route exact path="/library">
              <Library/>
          </Route>
          <Route exact path="/health-center">
              <HealthCenter/>
          </Route>
          <Route exact path="/health-center/book-appointment">
              <DoctorAppointment/>
          </Route>
          <Route exact path="/health-center/get-prescription">
              <GetPrescription/>
          </Route>
        </Switch>
      </Router>
    );
}

export default App;


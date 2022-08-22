import React from 'react'
import Library from './User_Components/Library'
import Main from './User_Components/Main'
import Health_Center from './User_Components/Health_Center'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DoctorAppointment from './User_Components/DoctorAppointment'

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
              <Health_Center/>
          </Route>
          <Route exact path="/health-center/book-appointment">
              <DoctorAppointment/>
          </Route>
        </Switch>
      </Router>
    );
}

export default App;


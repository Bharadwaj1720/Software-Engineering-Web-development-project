import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Fine_Management from './Library Management/Fine Management';
import Book_Acquisition from './Library Management/Book Acquisition Module'
import Journal_Acquisition from './Library Management/Journal Acquisition Module'
import Lost_Book from './Library Management/Lost book Module'
import Status from './Library Management/Status of Library account'
import Guest_house from './General Administration/Guest house Management'
import Vehicle_Management from './General Administration/Vehicle Management';
import Profile from './Profile';
import Contact from './Contact';
import FAQ from './Faq';
import Help from './help';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Fine Management">
          <Fine_Management />
        </Route>
        <Route exact path="/Book Acquisition Module">
          <Book_Acquisition />
        </Route>
        <Route exact path="/Journal Acquisition Module">
          <Journal_Acquisition />
        </Route>
        <Route exact path="/Lost book Module">
          <Lost_Book />
        </Route>
        <Route exact path="/Status of Library account">
          <Status />
        </Route>
        <Route exact path="/Guest house Management">
          <Guest_house />
        </Route>
        <Route exact path="/Vehicle Management">
          <Vehicle_Management />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Faq">
          <FAQ />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;

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
import Doctor_Consultation from './Health Center/Doctor Consultantion';
import Employee_Medical from './Health Center/Employee Medical Record';
import Pharmacy_Data from './Health Center/Pharmacy Data';
import Referral_letters from './Health Center/Referral letters to Hospitals';
import Student_Medical from './Health Center/Student Medical Record';
import Open_Project from './Sponcered Research and Consultancy/Open Projects Notifications';
import Processes_Accounts from './Sponcered Research and Consultancy/Processes from Accounts Module';
import Processes_Purchase from './Sponcered Research and Consultancy/Processes from Purchase Module';
import Book_Checkout from './Library Management/Book Checkout';
import Change_pass from './Change_pass';

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
        <Route exact path="/Book Checkout">
          <Book_Checkout />
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
        <Route exact path="/Doctor Consultation">
          <Doctor_Consultation />
        </Route>
        <Route exact path="/Employee Medical Record">
          <Employee_Medical />
        </Route>
        <Route exact path="/Pharmacy Data">
          <Pharmacy_Data />
        </Route>
        <Route exact path="/Referral letters to Hospitals">
          <Referral_letters />
        </Route>
        <Route exact path="/Student Medical Record">
          <Student_Medical />
        </Route>
        <Route exact path="/Open Projects Notifications">
          <Open_Project />
        </Route>
        <Route exact path="/Accounts">
          <Processes_Accounts />
        </Route>
        <Route exact path="/Purchase">
          <Processes_Purchase />
        </Route>
        <Route exact path="/Change_pass">
          <Change_pass />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;

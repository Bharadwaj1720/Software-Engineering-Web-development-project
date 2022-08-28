import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Fine_Management from './Library Management/Fine Management';

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
        <Route exact path="/Book Acquisition">
          <Book_Acquisition />
        </Route>
        <Route exact path="/Journal Acquisition">
          <Journal_Acquisition />
        </Route>
        <Route exact path="/Lost book">
          <Lost />
        </Route>
        <Route exact path="/Fine Management">
          <Fine_Management />
        </Route>
        <Route exact path="/Fine Management">
          <Fine_Management />
        </Route>
        <Route exact path="/Fine Management">
          <Fine_Management />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;

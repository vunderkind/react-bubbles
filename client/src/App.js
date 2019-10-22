import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import './styles.scss';
import './App.css';

  function App() {
  return (
    <Router>
        <div className="App">
          <div className="Links">
            <ul>
              <li>
                <Link to="/login">Log In</Link>
                </li>
              <li>
             <Link to="/bubbles">Bubbles</Link>
          </li>
      </ul>
      </div>
            <h1>Colors</h1>
            <h2>by Lambda School</h2>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/bubbles" component={BubblePage} />
        </div>
    </Router>
)

};

export default App;

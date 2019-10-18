import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthContext} from './context/auth';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import './styles.scss';

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
        <div>
            <ul className="Routes">
        <li>
             <Link to="/login">Log In</Link>
        </li>
        <li>
             <Link to="/bubbles">Bubbles</Link>
        </li>
      </ul>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/bubbles" component={BubblePage} />
        </div>
    </Router>
    </AuthContext.Provider>
)
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
        <h1>Doctor-Portal Login</h1>
          <div className="container">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4"><Login /></div>
              <div className="col-4"></div>
            </div>
          </div>
        </Route>
        <Route path="/signup">
        <h1>Doctor Portal SignUp</h1>
          <div className="container">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4"><Signup /></div>
              <div className="col-4"></div>
            </div>
          </div>
        </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Doctor Portal Login</h1>
      <div className="container">
        <div className="row">
          <div class="col-4"></div>
          <div class="col-4"><Login /></div>
          <div class="col-4"></div>

        </div>
      </div>
    </div>
  );
}

export default App;

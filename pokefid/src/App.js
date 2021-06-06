import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/Layout/NavBar';
import Dashboard from './components/Layout/Dashboard';

class App extends Component {
  render(){
    return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashboard/>
      </div>
    </div>
    );
  }
}

export default App;

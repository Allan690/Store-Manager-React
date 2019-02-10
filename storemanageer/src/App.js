import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import Login  from '../src/components/Login'
import {ToastContainer} from "react-toastify";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login/>
      <ToastContainer/>
      </div>
    );
  }
}

export default App;

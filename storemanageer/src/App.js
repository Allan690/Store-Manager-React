import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Login  from '../src/components/Login'
import SignUp from './components/Signup'
import {ToastContainer} from "react-toastify";

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
        <Switch>
          <Route path="/" component={Login} exact Strict/>
          <Route path="/signup" component={SignUp} exact Strict/>
        </Switch>
      <ToastContainer/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

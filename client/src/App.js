import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import AddForm from './components/Form';
import Url from './components/Url';
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import About from './components/About';
class App extends Component {

  render() {


    return (
      <div className="App">
        <BrowserRouter>

          <div>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/add" component={Url} />
            <Route exact path="/db" component={AddForm} />

          </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;

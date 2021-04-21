import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Stuff from "./Stuff";
import Contact from "./components/Contact";

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return (
      <div>
        {/* <Login setToken={setToken} /> */}
        <HashRouter>
          <NavLink exact to="/login">Login</NavLink>
          <NavLink exact to="/signup">Sign Up</NavLink>
          <div className="content">
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          </div>
        </HashRouter>
      </div>
    )
  }
  return (
    <div className="App">
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    </div>
  );
}

export default App;

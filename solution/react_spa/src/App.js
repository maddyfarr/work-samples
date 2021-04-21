import './App.css';
import React, { useState } from 'react';
import LoginContainer from './components/LoginContainer';
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
        <LoginContainer setToken={setToken} />
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

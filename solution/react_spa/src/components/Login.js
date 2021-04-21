import React from 'react';
import './Login.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SignUp from "./SignUp";

export default function Login() {
  return(
    <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
      <HashRouter>
        <NavLink exact to="/signup">Sign Up</NavLink>
      <div className="content">
        <Route exact path="/signup" component={SignUp}/>
      </div>
      </HashRouter>
    </form>
    </div>
  )
}
import React from 'react';
import './Login.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Login from "./Login";

export default function SignUp() {
  return(
    <div className="login-wrapper">
    <h1>Please Sign Up</h1>
    <form>
    <label>
        <p>Name</p>
        <input type="text" />
      </label>
      <label>
        <p>Email</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <label>
        <p>Password Confirmation</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
      <HashRouter>
        <NavLink exact to="/login">Log in</NavLink>
        <div className="content">
            <Route exact path="/login" component={Login}/>
        </div>
    </HashRouter>
    </form>
    </div>
  )
}
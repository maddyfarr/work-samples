import React from 'react';
import './Login.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default function LoginContainer() {
    return(
    <div className="login-wrapper">
        <h1>
            Tanda
        </h1>
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
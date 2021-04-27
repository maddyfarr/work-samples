import React, { useState } from 'react';
import './Login.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Login from "./Login";
import PropTypes from 'prop-types';

export default function SignUp({ setToken }) {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
  }

  const handleInputValue = (evt) => {
     const requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept-Encoding': 'gzip, deflate, br', 'Content-length': 52 },
      body: JSON.stringify({ name: username, email: email, password: password, passwordConfirmation: passwordConfirmation })
      };
      console.log(requestOptions)
    fetch('http://localhost:3000/auth/signup', requestOptions)
      .then(response => { response.json();
      })
      .catch(err => {
        console.log(err);
      });
}

  return(
    <div className="login-wrapper">
    <h1>Please Sign Up</h1>
    <form onSubmit={handleSubmit}>
    <label>
        <p>Name</p>
        <input type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <p>Email</p>
        <input type="text" onChange={e => setEmail(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <label>
        <p>Password Confirmation</p>
        <input type="passworConfirmation" onChange={e => setPasswordConfirmation(e.target.value)}/>
      </label>
      <div>
        <button onClick={handleInputValue}>Submit</button>
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
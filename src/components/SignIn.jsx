import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function SignIn() {

  const login = (event) => {
    event.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    async function userLogin(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
      });
      return response.json();
    }

    userLogin('http://localhost:3000/login', { 
      "username": email.value,
      "password": password.value
     })
      .then(data => {
        // console.log(data.accessToken); // JSON data parsed by `data.json()` call
        localStorage.setItem('accessToken', data.accessToken);
        console.log(localStorage.getItem('accessToken')); // JSON data parsed by `data.json()` call
        window.location = "/home"
      });

  }

  return (
    <div>
      <NavBar />
      <div className="center center-login">
        <h1 className="login-title">Welcome Back</h1>
        <form action="#">
          <div className="text_field">
            <label className="email-login email" htmlFor="username">
              E-mail
            </label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Enter E-mail Address"
              required
            />
          </div>
          <div className="text_field">
            <label className="password-login password" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="text"
              id="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <button className="login" type="submit" onClick={(event) => login(event)}>
            Login
          </button>
          <br />
          <a className="pass forgot-new">
            <Link className="link" to="/forgot">
              Forgot Password?
            </Link>
          </a>
          <br />
          <a className="signup-link forgot-new">
            <Link className="link" to="/signup">
              New to LiteLess?
            </Link>
          </a>
        </form>
      </div>
    </div>
  );

}

import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default class SignUp extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="center center-signup">
          <h1 className="signup-title">Create Account</h1>
          <form id="signup-form" action="#">
            <div className="text_field">
              <label className="email" htmlFor="email">
                E-mail
              </label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Enter E-mail"
                required
              />
            </div>
            <div className="text_field">
              <label className="password" htmlFor="password">
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
            <div className="text_field">
              <label className="repeat" htmlFor="repeat">
                Confirm Password
              </label>
              <br />
              <input
                type="text"
                id="repeat"
                placeholder="Repeat Password"
                required
              />
            </div>
            <button className="signup" type="submit">
              SignUp
            </button>
            <br />
            <a className="pass forgot-new">
              <Link className="link" to="/login">
                Already have an account?
              </Link>
            </a>
          </form>
        </div>
      </div>
    );
  }
}

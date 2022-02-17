import React from "react";
import NavBar from "./NavBar";

export default function Forgot() {


  return (
    localStorage.getItem('accessToken') === null ? window.location = '/login' :
      <div>
        <NavBar />
        <div className="center center-login">
          <h1>
            <div className="title">
              Let’s check if your E-mail is in our bucket :{")"}
            </div>
          </h1>
          <form action="#">
            <div className="text_field">
              <label className="email-login email" htmlFor="username">
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
            <button className="login" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
  );
}

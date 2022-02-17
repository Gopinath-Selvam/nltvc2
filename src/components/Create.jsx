import React from "react";
import NavBar from "./NavBar";

export default function Create() {

  return (
    localStorage.getItem('accessToken') === null ? window.location = '/login' :
      <>
        <NavBar />
        <div className="center center-login">
          <h1 className="login-title">Create Meeting</h1>
          <form action="#">
            <div className="text_field">
              <label className="room-login email" htmlFor="username">
                Room Name
              </label>
              <br />
              <input
                type="text"
                id="email"
                placeholder="Enter Room Name"
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
            <button className="login" type="submit">
              Create
            </button>
          </form>
        </div>
    </>
  );
}

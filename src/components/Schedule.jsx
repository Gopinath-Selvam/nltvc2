import React from "react";
import NavBar from "./NavBar";

export default function Schedule() {
  return (
    localStorage.getItem('accessToken') === null ? window.location = '/login' :
      <div>
        <NavBar />
        <div className="center center-signup">
          <h1 className="signup-title">Schedule Meeting</h1>
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
              <label className="date" htmlFor="date">
                Date
              </label>
              <br />
              <input type="date" id="date" required />
            </div>
            <div className="text_field">
              <label className="time" htmlFor="time">
                Time
              </label>
              <br />
              <input type="time" id="time" required />
            </div>
            <div className="text_field">
              <label className="time-zone" htmlFor="email">
                Time-Zone
              </label>
              <br />
              <input
                type="dropdown"
                id="email"
                placeholder="Enter Country"
                required
              />
            </div>
            <button className="signup" type="submit">
              Schedule
            </button>
          </form>
        </div>
      </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function NavBar() {

  const logout = (event) => {
    event.preventDefault()
    localStorage.removeItem('accessToken')
  }


  return (
    <header>
      <nav>
        <div className="logo-container">
          <Link to="/home">
            <img src={logo} alt="LiteLess" height="65px" />
          </Link>
        </div>
        <input type="checkbox" name="check" id="check" />
        <label htmlFor="check" className="hamburger-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {
            localStorage.getItem('accessToken') == null ? <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </> :
              <li>
                <button onClick={(event) => logout(event)}>Sign Up</button>
              </li>
          }
        </ul>
      </nav>
    </header>
  );
}

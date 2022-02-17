import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Forgot from "./components/Forgot";
import Create from './components/Create';
import Schedule from "./components/Schedule";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="home" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="login" element={<SignIn />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="forgot" element={<Forgot />}></Route>
            <Route path="create" element={<Create />}></Route>
            <Route path="schedule" element={<Schedule />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

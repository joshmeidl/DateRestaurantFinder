import React, { Component } from "react";
import "./Home.css";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import logo from './logo2.png'
class Navbar extends Component {
  render() {

    return (
      <div>
        <div className="header">
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="slogan">Restaurant Finder</h1>
          <Link to="/quiz" className="links">Quiz</Link>
          <Link to="/results" className="links">Results</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;

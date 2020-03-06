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
          <Link to="/" style={{color: "white"}}><h1 className="slogan">Date Night</h1></Link>
          <Link to="/quiz" style={{color: "white"}} className="links">Quiz</Link>
          {localStorage.getItem('food') ? <Link to="/results" style={{color: "white"}} className="links">Results</Link> : ''}
        </div>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import "./Home.css";
import Navbar from "./Navbar"
import Quiz from "./../quiz/Quiz";
import Results from "./../results/Results";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const msg =
      "Going on a date, but can't find a restaurant? Our online quiz allows you and your date to find the restaurant most compatible for the two of you. Click the link below to start!";
    return (
      <div>
        <div className="img">
          <h1 className="title">Date Night Helper</h1>
          <p className="paragraph lead">{msg}</p>
          <Link to="/quiz"><button className="submit">Find Restaurants</button></Link>
          <p style={{marginTop: "5%", color: "white"}}>Built by Aaqib Ismail and Josh Meidl</p>
        </div>
      </div>
    );
  }
}

export default Home;

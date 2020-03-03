import React, { Component } from "react";
import "./Home.css";
import Navbar from "./Navbar.jsx";

class Home extends Component {
  render() {
    const msg =
      "Going on a date, but can't find a restaurant? Our online quiz allows you and your date to find the restaurant most compatible for the two of you. Click the link below to start!";
    return (
      <div>
        <div className="img">
          {/* <div className="layer"></div> */}
          <h1 className="title">Restaurant</h1>
          {/* <div className="textBlock"> */}
          <h1 className="header">Date Night Helper</h1>
          {/* </div> */}
          <hr className="my-4" />
          <p style={{ textAlign: "center" }}>{msg}</p>
          <hr className="my-4" />
        </div>
      </div>
    );
  }
}

export default Home;

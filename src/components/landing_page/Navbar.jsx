import React, { Component } from "react";
import "./Home.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">Restaurants</span>
        </nav>
      </div>
    );
  }
}

export default Navbar;

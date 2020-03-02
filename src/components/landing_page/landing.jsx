import React, { Component } from "react";
import datePhoto from "./date.jpeg";
import Navbar from "./Navbar.jsx";
import Quiz from "./../quiz/Quiz.jsx"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return(
      <div className="container-fluid">
        <Navbar />      
        <div className="jumbotron">        
          <h1 className="display-4">Date Night Helper</h1>
          <p className="lead">Going on a date, but can't find a restaurant? Our online quiz allows you and your date 
            to find the restaurant most compatible for the two of you. Click the link below to start!</p>
          
          <hr className="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <Router>
            <p className="lead"><Link to="/Quiz" className="btn btn-primary btn-lg">Take Quiz</Link></p>
            <Route path="/Quiz" component={Quiz} />
          </Router>
        </div>
      </div>
    );
  }
}

export default Landing;

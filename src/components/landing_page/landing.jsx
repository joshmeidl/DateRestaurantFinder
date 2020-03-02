import React, { Component } from "react";
import datePhoto from "./date.jpeg";

// using ES6 modules
import { Router, Route, Switch } from "react-router";
 
// using CommonJS modules
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var Switch = require("react-router").Switch;
class Landing extends Component {
  state = {
    websiteName: "Date Night Helper",
    about:
      "Going on a date, but can't find a restaurant? Our online quiz allows you and your date to find the restaurant most compatible for the two of you. Click the link below to start!"
  };
  
  /*render() {
    return (
      <React.Fragment>
        <span>
          <img className="homeImage" src={datePhoto}></img>
          <h1 className="homeTitle">test</h1>
        </span>
        
        <p className="divider">
          -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </p>
        <h4>{this.state.about}</h4>
        <p className="divider">
          -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </p>
        <button>Quiz</button>
      </React.Fragment>
    );
  }*/
  render() {
    return (
      <div class="site-wrapper">
        <div class="site-wrapper-inner">
          <div class="container">
            <div class="masthead clearfix">
              <div class="container inner">
                <h3 class="masthead-brand">Cover</h3>
                <nav>
                  <ul class="nav masthead-nav">
                    <li class="active">
                      <a href="././Quiz"></a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="inner cover">
              <h1 class="cover-heading">{this.state.websiteName}</h1>
              <p class="lead">{this.state.about}</p>
              <p class="lead">
                <a href="#" class="btn btn-lg btn-default">
                  Take Quiz
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

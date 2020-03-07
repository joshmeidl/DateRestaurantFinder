import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Quiz from "./../quiz/Quiz.jsx";
import Results from "./../results/Results.jsx";
import Home from "./home.jsx";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/quiz">
                <Quiz />
              </Route>
              <Route path="/results/list">
                <Results />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Landing;

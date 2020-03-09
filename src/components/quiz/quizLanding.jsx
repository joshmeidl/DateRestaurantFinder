import React, { Component } from "react";
import Navbar from "./../landing_page/Navbar";
import Quiz from "./Quiz.jsx";
import Results from "./../results/Results.jsx";
import Home from "./../landing_page/home";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class QuizLanding extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route path="/quiz">
                <Quiz />
              </Route>
              <Route path="/results">
                <Results />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default QuizLanding;

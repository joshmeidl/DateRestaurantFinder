import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Quiz from "./../quiz/Quiz.jsx";
import Results from "./../results/Results.jsx";
import Home from "./home.jsx";
import QuizLanding from "./../quiz/quizLanding"

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
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/quiz">
                <QuizLanding />
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

export default Landing;

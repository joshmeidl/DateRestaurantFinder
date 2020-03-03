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
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        {/* <Navbar /> */}
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/quiz">
                <Quiz />
              </Route>
              <Route path="/results">
                <Results />
              </Route>
            </Switch>
            <div>
              <Link to="/" className="btn btn-link">
                Home
              </Link>
              <Link to="/quiz" className="btn btn-link">
                Take Quiz
              </Link>
              <Link to="/results" className="btn btn-link">
                Get Results
              </Link>
            </div>
            <hr className="my-4" />
          </div>
        </Router>
      </div>
    );
  }
}

export default Landing;

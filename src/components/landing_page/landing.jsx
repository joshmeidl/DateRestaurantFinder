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
    return(
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

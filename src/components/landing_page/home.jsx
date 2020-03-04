import React, { Component } from 'react'
import './Home.css'
import Quiz from './../quiz/Quiz'
import Results from './../results/Results'

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

class Home extends Component {
  render() { 
    const msg = "Going on a date, but can't find a restaurant? Our online quiz allows you and your date to find the restaurant most compatible for the two of you. Click the link below to start!";
    return (
    <div>
      <div className="img jumbotron">
        <h1 className="title display-4">Restaurant</h1>
        <h1 className="header">Date Night Helper</h1>
        <hr className="my-4"/>
        <p className="lead">{msg}</p>
        <hr className="my-4"/>
      </div>
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
          <Link to="/" className="btn btn-link">Home</Link>
          <Link to="/quiz" className="btn btn-link">Take Quiz</Link>
          <Link to="/results" className="btn btn-link">Get Results</Link>
        </div>
        <hr className="my-4"/>
      </div>
      </Router>
    </div>);
    };
  }
 
export default Home;
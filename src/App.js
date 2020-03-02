import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "./components/landing_page/landing";
import Quiz from "./components/quiz/Quiz";
import Answer from "./components/quiz/Answer";

const App = () => {
  return (
    <div>
      <Landing />
    </div>
    // <BrowserRouter>
    //     <div>
    //         <Switch>
    //          <Route path="/" component={Landing} exact/>
    //          <Route path="/Quiz" component={Quiz}/>
    //          <Route path="/Answer" component={Answer}/>
    //        </Switch>
    //     </div> 
      // </BrowserRouter>
  );
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing_page/landing";
import Home from "./components/landing_page/home";
import Results from "./components/results/Results";
const App = () => {
  return (
    <div>
      <Results />
    </div>
  );
};

export default App;

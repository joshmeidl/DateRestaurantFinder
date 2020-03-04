import React, { Component } from "react";
import logo from "./logo.svg";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing_page/landing";
import Home from "./components/landing_page/home";

const App = () => {
  return (
    <div>
      <Landing />
    </div>
  );
};

export default App;

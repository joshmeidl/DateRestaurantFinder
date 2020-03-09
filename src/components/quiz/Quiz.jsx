import React, { Component } from "react";
import Question from "./Question";
import FoodTypes from "./FoodTypes";
import SelectArray from "./SelectArray";
import Results from "./../results/Results.jsx";
import "./Quiz.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SelectQ from "./SelectQ";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: false,
      food: "",
      loc: "",
      latitude: "",
      longitude: "",
      commute: "1 mile",
      casual: "Casual",
      budget: "$20",
      open: "yes",
      post: "Drinks"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setSelect = () => {
    localStorage.setItem("commute", this.state.commute);
    localStorage.setItem("casual", this.state.casual);
    localStorage.setItem("budget", this.state.budget);
    localStorage.setItem("open", this.state.open);
    localStorage.setItem("post", this.state.open);
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    localStorage.setItem(name, value);
  }

  handleSubmit(event) {
    if (
      (this.state.latitude && this.state.longitude && this.state.food) ||
      (this.state.loc && this.state.food)
    ) {
    } else {
      alert("Fill out quiz completely");
      return false;
    }
  }

  componentDidMount() {
    localStorage.clear();
    this.setSelect();
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.setState({ location: true, latitude: lat, longitude: lng });
        localStorage.setItem("latitude", lat);
        localStorage.setItem("longitude", lng);
      },
      error => {
        console.log("No location given");
      }
    );
  }
  render() {
    const important =
      "Please share location to display restaurants around you.";
    const msg =
      "Following each question, input your answer into the text box below it. Once you are finished with the quiz, click the submit button at the bottom to recieve your results!";
    const food = FoodTypes.map(item => (
      <Question
        key={item.id}
        question={item.question}
        suggestions={item.answers}
        handleChange={this.handleChange}
      />
    ));
    const select = SelectArray.map(item => (
      <SelectQ
        key={item.id}
        name={item.name}
        question={item.question}
        options={item.answers}
        handleChange={this.handleChange}
      />
    ));

    const noLoc = (
      <div className="input">
        <h1 className="question">What city do you live in?</h1>
        <input
          name="loc"
          type="text"
          placeholder="City, State"
          onChange={this.handleChange}
          required
        />
      </div>
    );
    return (
      <div>
        <h1 className="quizTitle">Restaurant Quiz</h1>
        <div className="top">
          <h5>
            <strong>{important}</strong>
          </h5>
          <p>{msg}</p>
        </div>
        {food}
        {this.state.location ? "" : noLoc}
        {select}
        <div className="middle">
          {
            (this.state.latitude && this.state.longitude && this.state.food) ||
            (this.state.loc && this.state.food)
          ? 
            <Link to="/results">
            <button
              type="button"
              className="sub submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </Link>
          : <Link to="/quiz">
          <button
            type="button"
            className="sub submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </Link>}
           
        </div>
      </div>
    );
  }
}

export default Quiz;

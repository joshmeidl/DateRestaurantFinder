import React, { Component } from "react";
import Question from "./Question";
import FoodTypes from "./FoodTypes";
import SelectArray from "./SelectArray";
import Results from "./../results/Results.jsx";
import "./Quiz.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
      commute: "",
      casual: "",
      budget: "",
      test: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    localStorage.setItem(name, value);
  }

  handleSubmit(event) {
    if (this.state.location) {
      if (this.state.latitude && this.state.longitude && this.state.food){
        // return true;
      } else {
          alert('Fill out quiz completely');
          return false;
      }
    }
    else {
      if (this.state.loc && this.state.food) {
        // return true;
      } else {
          alert('Fill out quiz completely');
          return false;
      }
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const loc = JSON.stringify(position);
        console.log(position);
        console.log(lng);
        console.log(lat);
        this.setState({ location: true });
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
    const select = SelectArray.map(item => {
      switch (item.id) {
        case 0:
          return (
            <SelectQ
              key={item.id}
              name={item.name}
              question={item.question}
              options={item.answers}
              val={this.state.commute}
              handleChange={this.handleChange}
            />
          );
        case 1:
          return (
            <SelectQ
              key={item.id}
              name={item.name}
              question={item.question}
              options={item.answers}
              val={this.state.casual}
              handleChange={this.handleChange}
            />
          );
        case 2:
          return (
            <SelectQ
              key={item.id}
              name={item.name}
              question={item.question}
              options={item.answers}
              val={this.state.budget}
              handleChange={this.handleChange}
            />
          );
      }
    });
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
          <Router>
            <Link to="/results">
              <button
                type="submit"
                className="sub submit"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </Link>
          </Router>
        </div>
      </div>
    );
  }
}

export default Quiz;

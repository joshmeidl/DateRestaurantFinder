import React, { Component } from "react"
import Question from "./Question"
import FoodTypes from "./FoodTypes"
import SelectArray from "./SelectArray"
import Results from "./../results/Results.jsx"
import "./Quiz.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import SelectQ from "./SelectQ"

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: false,
      latitude: "",
      longitude: "",
      commute: "",
      casual: "",
      budget: "",
      test: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
			position => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
				const loc = JSON.stringify(position);
        console.log(loc);
        console.log(lng);
        console.log(lat);
				this.setState({ location: true });
			},
			error => { 
        console.log("No location given")

      });
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
      />
    ));
    const select = SelectArray.map(item => {
      switch(item.id){
        case 0:
          return(
            <SelectQ
              key = {item.id}
              name = {item.name}
              question = {item.question}
              options = {item.answers}
              val = {this.state.commute}
              handleChange = {this.handleChange}
            />);
        case 1:
          return(
            <SelectQ
              key = {item.id}
              name = {item.name}
              question = {item.question}
              options = {item.answers}
              val = {this.state.casual}
              handleChange = {this.handleChange}
            />);
        case 2:
          return(
            <SelectQ
              key = {item.id}
              name = {item.name}
              question = {item.question}
              options = {item.answers}
              val = {this.state.budget}
              handleChange = {this.handleChange}
            />);
      }
      
    });
    const noLoc = <div className="input"><h1 className="question">What city do you live in?</h1><input name="location" type="text" required/></div>
    return (
      <div>
        <h1 className="quizTitle">Restaurant Quiz</h1>
        <hr />
        <p className="bold">{important}</p>
        <p>{msg}</p>
        <hr />
        <form method="GET" action="process.php">
          {food}
          {this.state.location ? '' : noLoc}
          {select}
          <button type="submit" className="submit">Submit</button>
        </form>
        {/* <Router>
          <br></br>
          <p className="lead">
            <Link to="/Results" className="btn btn-primary btn-lg">
              Submit
            </Link>
          </p>
          <Route path="/Results" component={Results} />
        </Router> */}
      </div>
    );
  }
}

export default Quiz;

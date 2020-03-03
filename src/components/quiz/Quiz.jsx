import React, { Component } from "react";
import Question from "./Question";
import questionArray from "./List";
import Results from "./../results/Results.jsx";
import './Quiz.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Quiz extends Component {
  constructor(props) {
    super(props)
  }


  handleAnswer = answer => {
    /*const questions = { ...this.state.questions };
    const index = questions.answers.indexOf(answer);
    questions.answers[index].selectedAnswer = answer.id;
    console.log(answers[index].selectedAnswer);*/
    answer.selected = true;
    this.setState({ answer });
  };

  render() {  
    const quiz = questionArray.map(item => 
      <Question 
        key={item.id} 
        question={item.question}
        suggestions={item.answers}/>)
    return (
      <div>
        <h1 className="quizTitle">Date Night Restaurant Finder Quiz </h1>
        <div>
          {quiz}
        </div>
        <Router>
          <br></br>
            <p className="lead"><Link to="/Results" className="btn btn-primary btn-lg">Submit</Link></p>
            <Route path="/Results" component={Results} />
          </Router>
      </div>
    );
  }
}

export default Quiz;

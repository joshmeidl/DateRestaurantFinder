import React, { Component } from "react";
import Answer from "./Answer";

class Question extends Component {
  render() {
    return (
      <div>
        <h1 className="question">{this.props.question.questionAsked}</h1>
        <div className="buttonGroup">
          {this.props.question.answers.map(answer => (
            <Answer
              key={answer.id}
              onAnswer={this.props.onAnswer}
              answer={answer}
            ></Answer>
          ))}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Question;

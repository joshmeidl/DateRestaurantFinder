import React, { Component } from "react";
import Answer from "./Answer";
import Autocomplete from "./Autocomplete"

class Question extends Component {
  render() {
    return (
      <div>
        <h1 className="question">{this.props.question.questionAsked}</h1>
        <div className="buttonGroup">
          <Autocomplete
          suggestions={[
            "Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"
          ]}
        />
          {/* {this.props.question.answers.map(answer => (
            <Answer
              key={answer.id}
              onAnswer={this.props.onAnswer}
              answer={answer}
            ></Answer>
          ))} */}
        </div>
      </div>
    );
  }
}

export default Question;

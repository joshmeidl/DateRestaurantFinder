import React, { Component } from "react";
import Question from "./Question";
import questionArray from "./List"

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

  /*resetAnswers = () => {
    const answers = this.state.answers.map(c => {
      c.selected = false;
      return c;
    });
    this.setState({ answers });
  };*/
  // List.forEach(function(obj) {
  //   console.log(obj);
  //   }) 
  render() {
    questionArray.forEach(element => {
      console.log(element.answers)
    });
    const quiz = questionArray.map(item => 
      <Question 
        key={item.id} 
        question={item.question}
        suggestion={item.answers}/>)
    return (
      <div>
        <h1 className="title">Date Night Restaurant Finder Quiz </h1>
        <div>
          {quiz}
          
            
          {/* <Question
              question="What type of food?"
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
        /> */}
        </div>
      </div>
    );
  }
}

export default Quiz;

import React, { Component } from "react";

class Answer extends Component {
  /*state = {
    imageUrl:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg",
    id: 1,
    answer: "Mexican food"
  };*/

  render() {
    let question = this.props.question;
    return (
      <div className={this.getButtonClass()}>
        <button onClick={() => this.props.onAnswer(this.props.answer)}>
          <img src={this.props.answer.imageUrl} />
          <h1 className="answerText">{this.props.answer.answer}</h1>
        </button>
      </div>
    );
  }

  getButtonClass = () => {
    let classes = "answerButton";
    classes += this.props.answer.selected === true ? "Grayed" : "Normal";
    return classes;
  };
}

export default Answer;

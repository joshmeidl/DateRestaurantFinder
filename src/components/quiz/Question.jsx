import React, { Component } from "react";
import Answer from "./Answer";
import Autocomplete from "./Autocomplete";
import "./Quiz.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: []
    };
  }
  componentDidMount() {
    this.setState({
      List: this.props.suggestions
    });
  }
  render() {
    return (
      <div>
        <h1 className="question">{this.props.question}</h1>
        <div className="buttonGroup">
          <Autocomplete suggestions={this.state.List} />
        </div>
      </div>
    );
  }
}

export default Question;

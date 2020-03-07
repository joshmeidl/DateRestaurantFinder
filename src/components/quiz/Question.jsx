import React, { Component } from "react";
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
        <div className="buttonGroup">
          <Autocomplete question={this.props.question} suggestions={this.state.List} handleChange={this.props.handleChange}/>
        </div>
      </div>
    );
  }
}

export default Question;

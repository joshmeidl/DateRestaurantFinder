import React, { Component } from "react";
import Answer from "./Answer";
import Autocomplete from "./Autocomplete"

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      List: []
    }
  }
  componentDidMount() {
    this.setState({
      List: this.props.suggestions
    })
  }
  render() {
    console.log(this.state.List);
    return (
      <div>
        <label>{this.props.question}</label>
        <div className="buttonGroup">
          <Autocomplete suggestions={this.state.List}/>
        </div>
      </div>
    );
  }
}

export default Question;

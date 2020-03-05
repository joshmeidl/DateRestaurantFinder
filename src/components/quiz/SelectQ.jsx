import React, { Component } from 'react';

class SelectQ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: ""
    }
  }
  handleChange = (e) => {
    this.props.handleChange(e)
    const { name, value } = e.target;
    this.setState({ val: value });
  }
  
  render() {
    const options = this.props.options.map(item => (
      <option value={item}>{item}</option>
    ));
    return (
      <div className="input">
        <h1 className="question">{this.props.question}</h1>
        <select className="select" name={this.props.name} value={this.state.val} onChange={this.handleChange} required>
          {options}
        </select>
      </div>
    );
  }
}

export default SelectQ;
import React, { Component } from 'react';

class SelectQ extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const options = this.props.options.map(item => (
      <option value={item}>{item}</option>
    ));
    return (
      <div className="input">
        <h1 className="question">{this.props.question}</h1>
        <select className="select" name={this.props.name} value={this.props.val} onChange={this.props.handleChange} required>
          {options}
        </select>
      </div>
    );
  }
}

export default SelectQ;
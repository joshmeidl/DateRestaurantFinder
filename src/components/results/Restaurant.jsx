import React, { Component } from "react";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      rating: "",
      price: "",
      categories: [],
      name: "",
      url: "",
      distance: "",
      image_url: ""
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      rating: this.props.rating,
      price: this.props.price,
      categories: this.props.categories,
      name: this.props.name,
      url: this.props.url,
      distance: this.props.distance,
      image_url: this.props.image_url
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.image_url} />
        <ul>
          <li>
            <p>{"cateogries: " + this.state.categories}</p>
          </li>
          <li>
            <p>{"rating: " + this.state.rating}</p>
          </li>
          <li>
            <p>{this.state.url}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Restaurant;

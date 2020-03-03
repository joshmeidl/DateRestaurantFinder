import React, { Component } from "react";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <p>{"cateogries: " + this.categories}</p>
      </div>
    );
  }
}

export default Restaurant;

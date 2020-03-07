import React, { Component } from "react";
import "./Results.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import CaveIn from './CaveIn'
import PopUp from './PopUp'

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      rating: "",
      phone: "",
      isOpen: true,
      price: "",
      categories: [],
      name: "",
      url: "",
      distance: "",
      image_url: "",
      collapse: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    // this.state = {
    //   id: 1,
    //   rating: 5,
    //   price: "$$$",
    //   categories: ["Mexican", "Tacos"],
    //   name: "Taco Bell",
    //   url: "tacobell.com",
    //   distance: "10 miles",
    //   image_url:
    //     "data:image/png;base64,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"
    // };
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      rating: this.props.rating,
      phone: this.props.phone,
      isOpen: this.props.isOpen,
      price: this.props.price,
      categories: this.props.categories,
      name: this.props.name,
      url: this.props.url,
      distance: this.props.distance,
      image_url: this.props.image_url
    });
  }

  displayCategories = () => {
    const categories = (
      <div className="list-group">
        {this.state.categories.map(category => (
          <p className="category">{category.title}</p>
        ))}
      </div>
    );
    return categories;
  };

  formatDetails = () => {
    if (this.state.isOpen) {
      return "Open";
    } else {
      return "Closed";
    }
  };
  
  toggle = () => this.setState({ collapse: !this.state.collapse});

  render() {
    return (
      <div className="restaurantContainer">
        <h3 className="restaurantTitle">{this.state.name}</h3>
        {/* <a href={this.state.image_url}> */}
          <img src={this.state.image_url} className="restaurantIMG" alt="Restaurant Logo"/>
        {/* </a> */}
        {this.displayCategories()}
        <CaveIn/>
        <PopUp className="uncontrolled"/>
    </div>
    );
  }
}

export default Restaurant;
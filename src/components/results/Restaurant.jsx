import React, { Component } from "react";
import "./Results.css";
import CaveIn from './CaveIn'
import PopUp from './PopUp'
import $ from 'jquery'

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
      location: {},
      address: "",
      collapse: false
    };
    this.popButton = React.createRef();
    this.caveButton = React.createRef();
    this.popClick = this.popClick.bind(this);
  }

  createJson = (location) => {
    let address = "";
    if (location.address1) 
      address += location.address1;
    if (location.address2) 
      address += " " + location.address2;
    if (location.address3) 
      address += " " + location.address3;
    if (location.city) 
      address += ", " + location.city;
    if (location.state)
      address += ", " + location.state;
    if (location.zip_code)
      address += " " + location.zip_code;
    return address;
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
      image_url: this.props.image_url,
      location: this.props.location,
      address: this.createJson(this.props.location)
    });
  }

  popClick = () => {
    if ($("#popup").is(':visible')) this.popButton.current.click();
    else this.caveButton.current.click();
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
          <img src={this.state.image_url} className="restaurantIMG" alt="Restaurant Logo" onClick={this.popClick}/>
        {this.displayCategories()}
        <CaveIn 
          ref={this.caveButton}
          rating={this.state.rating}
          price={this.state.price}
          address={this.state.address}
          phone={this.state.phone}
          url={this.state.url}
        />
        <PopUp
          className="uncontrolled"
          ref={this.popButton}
          id={this.state.id}
          rating={this.state.rating}
          price={this.state.price}
          address={this.state.address}
          phone={this.state.phone}
          url={this.state.url}
        />
    </div>
    );
  }
}

export default Restaurant;
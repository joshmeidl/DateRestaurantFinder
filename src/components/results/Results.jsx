import React, { Component } from 'react';
import Restaurant from './Restaurant.jsx';
import './Results.css'
import $ from "jquery"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    const API_Key = "Bearer M42T3szZIG5AZIws_n8Y2XvvAXGZa6x77mq-kLwHs7z9U7dTpVX7_vfW7Azy8uiDKYxipXM9CePFA8m2CzsRtSEXXgHF2Sc7WiBAWu3lh5OLWkx0K3mpxli5DJ5UXnYx";
    const config = {
      headers: {
        'Authorization': API_Key,
        method: 'GET'
      },
      params: {
        term: 'tacos',
        location: 'NYC'
      }
    };
    // fetch("https://api.yelp.com/v3/businesses/search", config)
    // .then(response => console.log(response.json()));
    // .then(response => {
    //   const {business} = response.data;
    //   this.setState({data: business});
    // });

    let myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&location=boston";
    let results;
    $.ajax({
       url: myurl,
       headers: {
        'Authorization': API_Key,
    },
       method: 'GET',
       dataType: 'json',
       success: function(array){
           console.log(array);
            results = array;
       }
    });   
    this.setState({
      data: results
    });   
  }
  
  displayData = () => {
    const msg = "Error: no results, please complete the quiz.";
    if(!this.state.data){
      return <span><h1 className= "error">{msg}</h1><Link to="/quiz" className="badge badge-light">QUIZ</Link></span>
    } else { return <h1>Data here</h1>
      // return {this.state.data.map(restaurant => {
      //   <Restaurant 
      //   key: {restaurant.id}
      //   restaurant: {restaurant} / >
      }
    }
  
  render() { 
    console.log(this.state.data);
    return (<div>
      <h1 className="quizTitle">Date Night Restaurant Finder Results </h1>
      <hr />
      {this.displayData()}
      <hr />
      </div>);
  }
}
 
export default Results;

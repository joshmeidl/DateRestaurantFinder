import React, { Component } from 'react';
import Restaurant from './Restaurant.jsx';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    const API_Key = "M42T3szZIG5AZIws_n8Y2XvvAXGZa6x77mq-kLwHs7z9U7dTpVX7_vfW7Azy8uiDKYxipXM9CePFA8m2CzsRtSEXXgHF2Sc7WiBAWu3lh5OLWkx0K3mpxli5DJ5UXnYx";
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
    fetch("https://api.yelp.com/v3/businesses/search", config)
    .then(response => console.log(response.json()));
    // .then(response => {
    //   const {business} = response.data;
    //   this.setState({data: business});
    // });
  }
  
  render() { 
    console.log(this.state.data);
    return (<div>
      <h1 className="quizTitle">Date Night Restaurant Finder Results </h1>
      <hr />
      <p className="bold">asf</p><p>asfkn</p>
      <hr />
      </div>);
  }
}
 
export default Results;

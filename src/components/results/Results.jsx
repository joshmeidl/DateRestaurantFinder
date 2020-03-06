import React, { Component } from "react";
import Restaurant from "./Restaurant.jsx";
import "./Results.css";
import $ from "jquery";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import API_KEY from "./Credentials"

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: 0,
        businesses: [],
      }
    };
  }
  
  componentDidMount() {
    const key = API_KEY;
    const config = {
      headers: {
        Authorization: key,
        method: "GET"
      },
      params: {
        term: "tacos",
        location: "NYC"
      }
    };

    console.log(localStorage.getItem('food'));
    console.log(localStorage.getItem('loc'));
    console.log(localStorage.getItem('latitude'));
    console.log(localStorage.getItem('longitude'));
    console.log(localStorage.getItem('commute'));
    console.log(localStorage.getItem('casual'));
    console.log(localStorage.getItem('budget'));


    let uri;
    //Check radius
    if (localStorage.getItem('commute') === "Delivery Please") {
      uri = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/transactions/delivery/search?limit=10&term=" 
              + encodeURI(localStorage.getItem('food'));
    } else {
      let dis = parseInt(localStorage.getItem('commute')) * 1609
      uri  = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=10" + 
            "&radius=" + dis + "&term=" + encodeURI(localStorage.getItem('food'));
    }   

    //Check formal or casual
    if (localStorage.getItem('casual') === "Casual") 
      uri += encodeURI(" food");
    else 
      uri += encodeURI(" fancy restaurant");
        
    //Check latitude
    if (localStorage.getItem('latitude')) {
      uri += "&latitude=" + encodeURI(localStorage.getItem('latitude')) 
            + "&longitude=" + encodeURI(localStorage.getItem('longitude')) 
    } else {
      uri += "&location=" + encodeURI(localStorage.getItem('loc'))
    }
    //Check price
    if (localStorage.getItem('budget') === "$20") 
      uri += "&price=1,2"
    else if (localStorage.getItem('budget') === "$50") 
      uri += "&price=1,2,3"
    else if (localStorage.getItem('budget') === "$100") 
      uri += "&price=1,2,3,4"
    else
      uri += "&price=1,2,3,4"
    
    //Check open now
    if (localStorage.getItem('open') === "yes") 
      uri += "&open_now=true"
    
    console.log(uri);
    let results;
    $.ajax({
      url: uri,
      headers: {
        Authorization: key
      },
      method: "GET",
      dataType: "json",
      success: function(array) {
        console.log(array);
        console.log(array.businesses)
        results = array;
        this.setState({
          data: results
        });
      }.bind(this)
    });

  }

  render() {
    console.log(this.state.data);
    const msg = "Error: no results, please complete the quiz.";
    // let restaurants;
    // if(!this.state.data){
    //   restaurants = <span><h1 className= "error">{msg}</h1><Link to="/quiz" className="badge badge-light">QUIZ</Link></span>
    // } else {
        // restaurants = this.state.data.businesses.map(restaurant => (
        // <Restaurant
        // key= {restaurant.id}
        // id = {restaurant.id}
        // rating= {restaurant.rating}
        // phone= {restaurant.phone}
        // isOpen={! restaurant.is_closed}
        // price= {restaurant.price}
        // categories= {restaurant.categories}
        // name= {restaurant.name}
        // url= {restaurant.url}
        // distance= {restaurant.distance}
        // image_url= {restaurant.image_url} />
        // )) 
      // }
    return (
      <div>
        <h1 className="quizTitle">Date Night Restaurant Finder Results </h1>
        <hr />
        {/* {restaurants} */}
        {/* <Restaurant
          id={1}
          rating={"5"}
          price={"$$$"}
          isOpen={true}
          categories={["Category1", "Category2", "Category3", "Category4"]}
          name={"Nobu"}
          url={"tacobell.com"}
          distance={"10 miles"}
          image_url={
            "data:image/png;base64,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"
          }
        />
        <hr />
        <Restaurant
          id={2}
          rating={"5"}
          price={"$$$"}
          isOpen={false}
          categories={["Mexican", "Tacos"]}
          name={"Perch"}
          url={"tacobell.com"}
          distance={"10 miles"}
          image_url={
            "https://media.bizj.us/view/img/10150636/baja-fresh-mexican-grill*1200xx3385-1905-0-128.jpg"
          }
        />
        <hr />
        <Restaurant
          id={1}
          rating={"5"}
          price={"$$$"}
          isOpen={true}
          categories={["Category1", "Category2", "Category3", "Category4"]}
          name={"The Palm Los Angeles"}
          url={"tacobell.com"}
          distance={"10 miles"}
          image_url={
            "data:image/png;base64,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"
          }
        />
        <hr />
        <Restaurant
          id={1}
          rating={"5"}
          price={"$$$"}
          isOpen={true}
          categories={["Category1", "Category2", "Category3", "Category4"]}
          name={"Taco Bell"}
          url={"tacobell.com"}
          distance={"10 miles"}
          image_url={
            "data:image/png;base64,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"
          }
        /> */}
        <hr />
      </div>
    );
  }
}

export default Results;

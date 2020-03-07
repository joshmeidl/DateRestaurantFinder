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
import API_KEY from "./Credentials";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: 0,
        businesses: []
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

    console.log(localStorage.getItem("food"));
    console.log(localStorage.getItem("loc"));
    console.log(localStorage.getItem("latitude"));
    console.log(localStorage.getItem("longitude"));
    console.log(localStorage.getItem("commute"));
    console.log(localStorage.getItem("casual"));
    console.log(localStorage.getItem("budget"));

    let uri;
    //Check radius
    if (localStorage.getItem("commute") === "Delivery Please") {
      uri =
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/transactions/delivery/search?term=" +
        encodeURI(localStorage.getItem("food"));
    } else {
      let dis = parseInt(localStorage.getItem("commute")) * 1609;
      if (dis > 40000) dis = 40000
      uri =
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=24&radius=" +
        dis +
        "&term=" +
        encodeURI(localStorage.getItem("food"));
    }

    //Check formal or casual
    if (localStorage.getItem("casual") === "Casual") uri += encodeURI(" food");
    else uri += encodeURI(" fancy restaurant");

    //Check latitude
    if (localStorage.getItem("latitude")) {
      uri +=
        "&latitude=" +
        encodeURI(localStorage.getItem("latitude")) +
        "&longitude=" +
        encodeURI(localStorage.getItem("longitude"));
    } else {
      uri += "&location=" + encodeURI(localStorage.getItem("loc"));
    }
    //Check price
    if (localStorage.getItem("budget") === "$20") uri += "&price=1,2";
    else if (localStorage.getItem("budget") === "$50") uri += "&price=1,2,3";
    else if (localStorage.getItem("budget") === "$100") uri += "&price=1,2,3,4";
    else uri += "&price=1,2,3,4";

    //Check open now
    if (localStorage.getItem("open") === "yes") uri += "&open_now=true";

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
        console.log(array.businesses);
        results = array;
        this.setState({
          data: results
        });
      }.bind(this)
    });
  }

  map() {
    return <h1>to be map</h1>;
  }

  render() {
    console.log(this.state.data);
    const msg = "Error: no results, please complete the quiz.";
    let restaurants;
    if (!this.state.data) {
      restaurants = (
        <span>
          <h1 className="error">{msg}</h1>
          <Link to="/quiz" className="badge badge-light">
            QUIZ
          </Link>
        </span>
      );
    } else {
      restaurants = this.state.data.businesses.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          id={restaurant.id}
          rating={restaurant.rating}
          phone={restaurant.phone}
          isOpen={!restaurant.is_closed}
          price={restaurant.price}
          categories={restaurant.categories}
          name={restaurant.name}
          url={restaurant.url}
          distance={restaurant.distance}
          image_url={restaurant.image_url}
        />
      ));
    }
    return (
      <div>
        <h1 className="resultsTitle">Date Night Restaurant Finder Results </h1>
        <Router>
          <div className="list_mapToggle">
            <Link to="/results/list" className="lmbutton">
              List View
            </Link>
            <Link to="/results/map" className="lbutton">
              Map View
            </Link>
          </div>
          <Switch>
            <Route exact path="/results/list">
              <hr />
              <div className="grid">
                {restaurants}
              </div>
            </Route>
            <Route path="/results/map">{this.map()}</Route>
          </Switch>
        </Router>
        <hr />
      </div>
    );
  }
}

export default Results;
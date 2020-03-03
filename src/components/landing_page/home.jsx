import React, { Component } from 'react';
import './Home.css'



class Home extends Component {
  render() { 
    const msg = "Going on a date, but can't find a restaurant? Our online quiz allows you and your date to find the restaurant most compatible for the two of you. Click the link below to start!";
    return (
    <div>
      {/* <img className="img" src="https://i.pinimg.com/originals/d1/d4/58/d1d4588e581d89fde10e878d6465823b.jpg" /> */}
      <div className="img">
        <div className="layer"></div>
        <div className="textBlock">
          <h1>Date Night Helper</h1>
        </div>
      </div>
        <hr className="my-4"/>
        <p style={{textAlign: "center"}}>{msg}</p>
        <hr className="my-4"/>
      </div>);
    };
  }
 
export default Home;
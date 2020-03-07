import React, { useState, useRef } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "./Results.css";

const CaveIn = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="cave">
        <button id="cave" ref={ref} onClick={toggle} >
          Details
        </button>
      </div>
      <Collapse isOpen={isOpen}>
        <Card className="cardbody">
          <CardBody>
          <h3>Rating: {props.rating}</h3>
          <h5>Price: {props.price}</h5>
          <h5>Address: {props.address} </h5>
          <h5>Phone: {props.phone}</h5>
          <a href={props.url} target="_blank">Yelp Page</a>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
})

export default CaveIn;
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
        <Card style={{fontSize: "1.2em"}}>
          <CardBody>
          <p><i>Rating:</i> {props.rating}</p>
          <p><i>Price:</i> {props.price}</p>
          <p><i>Address:</i> {props.address} </p>
          <p><i>Phone:</i> {props.phone}</p>
          <a href={props.url} target="_blank"><i>Yelp Page</i></a>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
})

export default CaveIn;
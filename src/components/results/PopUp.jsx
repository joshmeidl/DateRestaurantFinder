import React, { useState, useRef, useEffect } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import "./Results.css";

const PopUp = React.forwardRef((props, ref) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  useEffect(() => {
    // your post layout code (or 'effect') here.
    // document.getElementById(props.id.substring(0,5)).target = props.id
  },
  // array of variables that can trigger an update if they change. Pass an
  // an empty array if you just want to run it once after component mounted. 
  [])

  return (
    <div>
      <button id={"Popover-" + props.id} type="button">
        Details
      </button>
      <Popover 
        // trigger="focus hover click" 
        placement="bottom"
        isOpen={popoverOpen}
        toggle={toggle}
        target={"Popover-" + props.id}>
        <PopoverBody>
          <h3>Rating: {props.rating}</h3>
          <h5>Price: {props.price}</h5>
          <h5>Address: {props.address} </h5>
          <h5>Phone: {props.phone}</h5>
          <a href={props.url} target="_blank">Yelp Page</a>
        </PopoverBody>
      </Popover>
    </div>
  );
})

export default PopUp;
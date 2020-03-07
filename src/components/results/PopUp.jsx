import React, { useState, useRef } from 'react';
import "./Results.css";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const PopUp = React.forwardRef((props, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? props.id : undefined;

  return (
    <div>
      <div className="popup">
        <button id="popup" aria-describedby={id} ref={ref} variant="contained" onMouseEnter={handleClick} onClick={handleClick}>
          Details
        </button>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography style={{padding: "1em", fontSize: "1.2em"}} component={'h1'} onMouseLeave={handleClose}>
          <p><i>Rating:</i> {props.rating}</p>
          <p><i>Price:</i> {props.price}</p>
          <p><i>Address:</i> {props.address} </p>
          <p><i>Phone:</i> {props.phone}</p>
          <a href={props.url} target="_blank"><i>Yelp Page</i></a>
        </Typography>
      </Popover>
    </div>
  );
})

export default PopUp;
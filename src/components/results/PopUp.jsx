import React, { useState } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

const PopUp = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id="PopoverFocus" color="primary" type="button">
        Details
      </Button>
      <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
        <PopoverHeader>Focus Trigger</PopoverHeader>
        <PopoverBody>Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try.</PopoverBody>
      </UncontrolledPopover>
    </div>
  );
}

export default PopUp;
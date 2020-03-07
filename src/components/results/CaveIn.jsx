import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "./Results.css";

const CaveIn = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="cave">
        <Button id="cave" color="primary" onClick={toggle} >
          Details
        </Button>
      </div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CaveIn;
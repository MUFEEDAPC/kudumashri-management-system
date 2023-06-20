import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ds1 from "../../Assests/Images/ds1.jpeg";
import ds2 from "../../Assests/Images/ds2.jpeg";
import ds3 from "../../Assests/Images/ds3.jpeg";
import "./Dpage.scss"

const Dpage = () => {
  return (
    <div>
      <ul style={{display:"flex"}}>
        <li >    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ds1} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></li>
        <li>    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ds2} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></li>
        <li>    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ds3} alt=""/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></li>
      </ul>

    </div>
  )
}

export default Dpage
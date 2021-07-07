//import {cards, Button} from "react-bootstrap";
//import React, {Component} from "react"
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";

const Myfooter = () => (
    <Card className="text-center">
  <Card.Footer>Featured</Card.Footer>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
)

export default Myfooter
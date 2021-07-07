//import React from 'react';
import { Card, Button} from 'react-bootstrap'
import fantasy from './data/fantasy.json'
import { Container,row,col } from 'react-bootstrap'


const Cards = () => {
    console.log(fantasy)
    return  <div className = "container">
                <h2>Book Shop</h2>
                <div className='row xs={12} sm={6} md={4} lg={3}'>
                    
            {fantasy.slice(0,15).map(book => {
                return <Card className = "py-4 px-4 mx-2 my-2" style={{ width: '20rem'}}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    {book.category}
                  </Card.Text>
                  <Button variant="primary">{book.price}</Button>
                </Card.Body>
              </Card>
            })
            }
            </div>
        </div>
     
    }

export default Cards
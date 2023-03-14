import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Cards extends Component{


    render(){
        const {title,username,id,photo}=this.props;
        return(
            <Card style={{ width: '100%' }} id={id}>
            <Card.Img variant="top" src={`http://localhost:8080/images/image-${photo}.jpeg`} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {username}
              </Card.Text>
              <Button variant="primary">See details</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default Cards;
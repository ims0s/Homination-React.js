import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Cards extends Component{


    render(){
        const {title,username,id,photo,clickHandler}=this.props;
        return(
            <Card style={{ width: '100%' }} id={id}>
            <Card.Img variant="top" src={`http://localhost:8080/images/${photo}`} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {username}
              </Card.Text>
              <Button variant="primary" onClick={clickHandler}>See details</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default Cards;
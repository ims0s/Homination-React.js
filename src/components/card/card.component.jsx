import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

class Cards extends Component{
  

    render(){
        const {title,username,id,photo,}=this.props;
        
        return(
            <Card style={{ width: '100%' }} id={id}>
            <Card.Img variant="top" src={`http://localhost:8080/images/${photo}`} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {username}
              </Card.Text>
              <Link to={`./details/${id}`}>
                <Button variant="primary" >See details</Button>
              </Link>
            </Card.Body>
          </Card>
        )
    }
}

export default Cards;
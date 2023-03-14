import { Component } from "react";
import { Outlet } from "react-router-dom";
import NavBar from '../../components/nav-bar/nav-bar.component.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import  axios  from 'axios';
import Container from 'react-bootstrap/Container'
import Cards from '../../components/card/card.component';
class HomePage extends Component{

    constructor(){
        super();
        this.state={
          data:[],
        }
        fetch('http://localhost:5000/posts').then(res => res.json()).then(data => this.setState({data}))
        this.i=1;
      }

      show =() => {
        const {data}=this.state;
        return data.map(this.view)
      }
      view = (card) => {
        console.log(card)
        const {title,username,id,photo}=card;
        return(
          <Col xs={12} lg={3}>
            <Cards title={title} username={username} id={id} photo={photo}/>
          </Col>
        )
      }

    render(){
        return (<Container >
        <Row className='cardContainer'>
        {this.show()}
        
        </Row>
        </Container>)
    }
}
export default HomePage;
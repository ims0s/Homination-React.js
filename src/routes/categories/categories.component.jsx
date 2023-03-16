import { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Cards from '../../components/card/card.component'
// import OffCanvas from "../../components/offcanvas/offcanvas.component";
import { Outlet, } from "react-router-dom";
import './categories.style.css'
class Categories extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            show:false,
          }
          
          
    }

    componentDidMount(){
      fetch('http://localhost:5000/posts').then(res => res.json()).then(data => this.setState({data}))
    }


    show =() => {
        const {data}=this.state;
        return data.map(this.view)
      }


    view = (card) => {
        
        const {title,username,_id,photo}=card;
        return(
          <Col xs={12} lg={3} id={_id}>
            <Cards title={title} username={username} id={_id} photo={this.i++} clickHandler={this.setShow}/>
          </Col>
        )
      }
      setShow=()=>{
        this.setState(()=>{return{show:true}})
      }

      

    render(){
        // const {show}=this.state;
        return (
            <Container className="transparent" id="CategoriesContainer">
                <Row id="1">
                    {this.show()}
                </Row>
                <Outlet />
                
            </Container>
        )
    }
}

export default Categories;
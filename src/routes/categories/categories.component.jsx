import { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Cards from '../../components/card/card.component'
import ListGroup from 'react-bootstrap/ListGroup'
import { Outlet, } from "react-router-dom";
import './categories.style.css'
import ListGroupItem from "../../components/listGroupItem/listGroupItem.component";
class Categories extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            show:false,
          }
          
          
    }

    componentDidMount(){
      fetch('http://localhost:5000/services').then(res => res.json()).then(data => this.setState({data}))
    }


    show =() => {
        const {data}=this.state;
        return data.map(this.view)
      }


    view = (card) => {
        
        const {title,provider,_id,desc}=card;
        return(
          
            <ListGroupItem title={title} username={provider} desc={desc} id={_id} photo="https://st.hzcdn.com/fimgs/9721524c0144b220_9930-w368-h207-b0-p0---.jpg"/>
          
        )
      }
      setShow=()=>{
        this.setState(()=>{return{show:true}})
      }

      

    render(){
        // const {show}=this.state;
        const now = (<Row id="1"></Row>)
        return (
            <Container className="transparent" id="CategoriesContainer">
                <ListGroup>
                  {this.show()}
                </ListGroup>
                <Outlet />
                
            </Container>
        )
    }
}

export default Categories;
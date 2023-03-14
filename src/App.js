// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import  axios  from 'axios';
import Container from 'react-bootstrap/Container'
import Cards from './components/card/card.component';
import { Route,Routes } from 'react-router-dom';

class App extends Component{
  
  
  constructor(){
    super();
    this.state={
      data:[],
    }
    fetch('http://localhost:5000/posts').then(res => res.json()).then(data => this.setState({data}))
    this.i=1;
  }

 componentDidMount(){
    
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
        <Cards title={title} username={username} id={id} photo={this.i++}/>
      </Col>
    )
  }
  
  
  render (){
    const {data}=this.state
    

    return (
      <div className='App'>
        
        <NavBar />
        <Routes>
          <Route path='/' element={<Container >
        <Row className='cardContainer'>
        {this.show()}
        
        </Row>
        </Container>} />
        <Route path='home' element={<h1>hello world</h1>} />
        </Routes>
      </div>
    );
  }

}



export default App;

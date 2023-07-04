import { Component , Fragment,useContext } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet,useNavigate } from "react-router-dom";
import { UserContext } from "../../context/auth.context";
import { CategoryContext } from "../../context/category.context";
import Footer from '../../Layouts/Nav/Footer/Footer'
import './nav-bar.style.css'

class NavBar extends Component{
  
  render(){
        const {currentUser ,setCurrentUser} = this.props.userContext
        const {currentCategory,setCurrentCategory}=this.props.categoryContext
        const {navigate}=this.props
        const {REACT_APP_PROVIDER_APP}=process.env
        return(
          <Fragment>
            <Navbar bg="light" expand="lg" sticky="top">
          <Container fluid>
            <Navbar.Brand onClick={()=>navigate('/')}>Homination</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                
              >
                <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
                <NavDropdown title="Categories" id="navbarScrollingDropdown" href='/categories'>
                  <span className="mainCat mx-3" >Design And Planing</span>
                  <NavDropdown.Item onClick={()=>{navigate('/categories/Interior Designers And Decorators'); setCurrentCategory(!currentCategory) }}>Interior Designers and Decorators</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>{navigate('/categories/Kitchen And Bathroom Designers'); setCurrentCategory(!currentCategory)}}>Kitchen And Bathroom Designers</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>{navigate('/categories/Lighting Designers'); setCurrentCategory(!currentCategory)}}>Lighting Designers</NavDropdown.Item>
                  <span className="mainCat mx-3" >Construction And Renovation</span>
                  <NavDropdown.Item onClick={()=>{navigate('/categories/General Contractors'); setCurrentCategory(!currentCategory) }}>General Contractors</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>{navigate('/categories/Exterior And Siding Contractors'); setCurrentCategory(!currentCategory) }}>Exterior And Siding Contractors</NavDropdown.Item>
                </NavDropdown>
                {(!currentUser)&&<Nav.Link href={REACT_APP_PROVIDER_APP}>Provider's Section</Nav.Link>}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-warning">Search</Button>
              </Form>
              <Nav
                className=" my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {currentUser?(
                  <NavDropdown title={currentUser.username} align={{lg:'end'}} className="me-1" id="dropdown-menu-align-responsive-1">
                  <NavDropdown.Item onClick={()=>navigate('/proposals')}>Proposals History</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>{setCurrentUser(null); navigate('/')}}>Logout</NavDropdown.Item>
                </NavDropdown>
                  )
                  :(
                    <Fragment>
                    <Nav.Link onClick={()=>navigate('/Login')}>Login</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/register')}>Register</Nav.Link>
                    </Fragment>
                  )
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet/>
        <Footer />

          </Fragment>
        )
    }
}

 const NavbarHook= (props)=>{
  
  return (
  <NavBar
    {...props}
    userContext={useContext(UserContext)}
    categoryContext={useContext(CategoryContext)}
    navigate={useNavigate()}
  />
  )
}
export default NavbarHook
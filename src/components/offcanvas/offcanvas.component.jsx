import { Component } from "react";
import  Offcanvas  from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import { useParams ,Navigate } from "react-router-dom";
import "./offcanvas.style.css"
import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FormLabel } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

class OffCanvas extends Component{
    constructor(){
        super();
        
        
        this.state={
            show :true,
            modal:false,
            navigate:false,
            data:{
                title:'',
                desc:'',
                username:'',
            }
        }
        
    }
    
    componentDidUpdate(){
        
    }
    handleClose = ()=>{
        this.setState(() =>{return {show:false}})
        
    }
    
    componentDidMount(){
        const {service_id} = this.props.params;
            console.log(this.props.params)
        fetch(`http://localhost:5000/services/${service_id}`)
        .then((res)=> res.json())
        .then((data)=> this.setState(() => ({data:data})))
        
    }
    
    render(){
        const {show,data,modal}=this.state;
        
        
        
        if(this.state.navigate) return <Navigate to='../../'/>
        if(!this.state.show) setTimeout((e)=>{
            this.setState(() => {return {navigate:true}})
        },500) 
        return (
            <Offcanvas show={show} onHide={this.handleClose} placement="end" id="detailOffCanvas">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{data.provider}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h1>{data.title}</h1>
                <h5>{data.desc}</h5>
                <Button variant="warning" onClick={()=>{this.setState(()=>({modal:true}))}}>Make request</Button>  
                <Modal show={modal} onHide={()=>{this.setState(()=>({modal:false}))}} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header closeButton >
                        <Modal.Title id="contained-modal-title-vcenter">
                         Request
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Property type</Form.Label>
                                        <Form.Select>
                                            <option>Property Type</option>
                                            <option value="Villa">Villa</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Office">Office</option>
                                        </Form.Select>       
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Property in m²</Form.Label>
                                    <InputGroup >
                                        <InputGroup.Text>m²</InputGroup.Text>
                                        <Form.Control type="number" />
                                    </InputGroup>
                                </Form.Group>
  
                                </Col>
                                <Col>
                                <Form.Group>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control/>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg='fluid'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as='textarea' rows={3} />
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="warning" onClick={()=>{this.setState(()=>({modal:false}))}}>Submit</Button>
                        <Button variant="outline-secondary" onClick={()=>{this.setState(()=>({modal:false}))}}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Offcanvas.Body>
      </Offcanvas>
        )
    }
}

export default (props) => (
    <OffCanvas
        {...props}
        params={useParams()}
    />
);
;
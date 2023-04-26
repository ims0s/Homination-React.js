import {Component} from "react";
import  Button  from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  Col  from "react-bootstrap/Col";
import  InputGroup  from "react-bootstrap/InputGroup";

class ProposalForm extends Component{
    
    render(){
        const {modal,onhide}=this.props
        console.log(modal)
        return(
            <Modal show={modal} onHide={onhide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                    Request
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate >
                        <Row>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Property type</Form.Label>
                                    <Form.Select id="property_Type" required>
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
                                    <Form.Control id="propertyInMeter" type="number" required />
                                </InputGroup>
                            </Form.Group>

                            </Col>
                            <Col>
                            <Form.Group>
                                <Form.Label>Location</Form.Label>
                                <Form.Control id="location" required/>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='fluid'>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control id="request_Desc" as='textarea' rows={3} required />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button type="submit" variant="warning" >Submit</Button>
                    <Button variant="outline-secondary" onClick={()=>{this.setState(()=>({modal:false}))}}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ProposalForm;
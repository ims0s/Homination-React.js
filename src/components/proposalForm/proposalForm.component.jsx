import {Component} from "react";
import  Button  from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  Col  from "react-bootstrap/Col";
import  InputGroup  from "react-bootstrap/InputGroup";
import './proposalForm.style.css'
class ProposalForm extends Component{
    
    render(){
        const {modal,onhide,onChangeHandler,onSubmitHandler,validate}=this.props
        
        return(
            <Modal show={modal} onHide={onhide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                    Request
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form className="modalBody" noValidate validated={validate} onSubmit={onSubmitHandler} >
                        <Row>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Property type</Form.Label>
                                    <Form.Select id="property_Type" onChange={onChangeHandler} required>
                                        <option>Property Type</option>
                                        <option value="Villa">Villa</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Office">Office</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Its not the same.
                                    </Form.Control.Feedback>       
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                            <Form.Group>
                                <Form.Label>Property in m²</Form.Label>
                                <InputGroup >
                                    <Form.Control id="propertyInMeter" type="number" onChange={onChangeHandler} required />
                                    <InputGroup.Text>m²</InputGroup.Text>
                                </InputGroup>
                                <Form.Control.Feedback type="invalid">
                                        Its not the same.
                                    </Form.Control.Feedback>
                            </Form.Group>

                            </Col>
                            <Col>
                            <Form.Group>
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" id="location" onChange={onChangeHandler} required/>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='fluid'>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" id="request_Desc" as='textarea' onChange={onChangeHandler} rows={3} required />
                                </Form.Group>
                            </Col>
                        </Row>
                <Button variant="warning" type="submit">
                    Send
                </Button>
            </Form>
                </Modal.Body>
                
            </Modal>
        )
    }
}

export default ProposalForm;
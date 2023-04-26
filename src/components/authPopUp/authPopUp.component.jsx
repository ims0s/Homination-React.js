import { Component } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import "./authPopup.style.css"
class AuthPopup extends Component{


    render(){
        const {modal,onhide,navigate}=this.props;
        
        return (
            <Modal show={modal} onHide={onhide} size="sm" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>You don't have Account!!</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={{span:8,offset:2}} >
                            <p>create account free</p>
                            <Button variant="warning" size="sm" className="authB" onClick={()=>navigate('/register')}> Register </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span: 8,offset:2}}>
                            <p>Do you have account</p>
                            <Button variant="outline-secondary" size="sm" className="authB" onClick={()=>navigate('/Login')} >Login</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }
}

const AuthPopupHook=(props)=>{

    return(
        <AuthPopup
        {...props}
        navigate={useNavigate()}
        />
    )
}

export default AuthPopupHook;
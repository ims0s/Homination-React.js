import { Component } from "react";
import  Offcanvas  from "react-bootstrap/Offcanvas";

class OffCanvas extends Component{
    componentDidMount(){
        fetch()
    }
    render(){
        const {show,handleClose}=this.props;
        console.log('hello from offcanvas')
        return (
        <Offcanvas show={show} onHide={handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                I will not close if you click outside of me.
            </Offcanvas.Body>
      </Offcanvas>
        )
    }
}

export default OffCanvas;
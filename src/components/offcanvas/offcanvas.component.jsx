import { Component } from "react";
import  Offcanvas  from "react-bootstrap/Offcanvas";
import { useParams ,Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
class OffCanvas extends Component{
    constructor(){
        super();
        // const {show}=this.props
        this.state={
            show :true,
            navigate:false
        }

    }
    
    componentDidUpdate(){
        console.log(this.state.id)
    }
    handleClose = ()=>{
        this.setState(() =>{return {show:false}})
        
    }
    
    componentDidMount(){
        const {id}=this.props.params
        console.log(id)
        this.setState(() => ({id}))
        
    }
    
    render(){
        const {show}=this.state;
        if(this.state.navigate) return <Navigate to='../../'/>
        if(!this.state.show) setTimeout((e)=>{
            this.setState(() => {return {navigate:true}})
        },500) 
        return (
            <Offcanvas show={show} onHide={this.handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{this.state.id}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                
                {/* I will not close if you click outside of me. */}
                
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
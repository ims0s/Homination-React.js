import { Component,useContext } from "react";
import  Offcanvas  from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button"
import { useParams ,Navigate } from "react-router-dom";
import "./offcanvas.style.css"
import  Figure  from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { UserContext } from "../../context/auth.context";
import ProposalForm from '../proposalForm/proposalForm.component'
import AuthPopup from '../authPopUp/authPopUp.component'
import axios from "axios";
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
            },
            proposal:{Request_Description:{},},
            validate:false,
        }
        
    }

    handleClose = ()=>{
        this.setState(() =>{return {show:false}})
        
    }

    onChangeHandler=(e)=>{
        const {id,value}=e.target;
        
        this.setState(()=>({
            proposal:{
                ...this.state.proposal,
                Request_Description:{
                    ...this.state.proposal.Request_Description,
                    [id]:value,
                }
            }
        }))
    }

    onSubmitHandler=(event)=>{
        const {username,token}=this.props.UserContext.currentUser;
        const config = {
            headers: {
              Authorization: `${token}`,
            },
          };
        
        const {title,provider}=this.state.data;
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.preventDefault();
            event.stopPropagation();
            const proposal={
                ...this.state.proposal,
                client_Name:username,
                provider_Name:provider,
                service_Name:title,
                
            }
            axios.post('http://localhost:5000/requests/createRequest',proposal,config)
            .then(res=>res.data)
            .then(data=>{
                
                this.setState({modal:false})
            })
            .catch(e=>console.log(e))
        }
        this.setState(() => ({validate:true}),()=>console.log(this.state.validate))
    }
    
    componentDidMount(){
        const {service_id} = this.props.params;
            
        fetch(`http://localhost:5000/services/${service_id}`)
        .then((res)=> res.json())
        .then((data)=> {
            this.setState(() => ({data:data}))})
        
    }
    modalHide=()=>{
        this.setState(()=>({modal:false}))
    }
    
    render(){
        const {show,data,modal,validate}=this.state;
        const {UserContext}=this.props;
        const {currentUser}=UserContext;
        
        
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
                <Row>
                    <Col>
                        <h1>{data.title}</h1>
                        <h5>{data.desc}</h5>
                        <Button variant="warning" onClick={()=>{this.setState(()=>({modal:true}))}}>Send proposal</Button>  
                        {currentUser?<ProposalForm validate={validate} onSubmitHandler={this.onSubmitHandler} onChangeHandler={this.onChangeHandler} modal={modal} onhide={this.modalHide}/>
                        :<AuthPopup modal={modal} onhide={this.modalHide} />}
                    </Col>
                    <Col>
                        <Figure>
                            <Figure.Image width={300} height={168.75} src="https://st.hzcdn.com/fimgs/9721524c0144b220_9930-w368-h207-b0-p0---.jpg" />
                        </Figure>
                    </Col>
                </Row>
            </Offcanvas.Body>
      </Offcanvas>
        )
    }
}

export default (props) => (
    <OffCanvas
        {...props}
        params={useParams()}
        UserContext={useContext(UserContext)}
    />
);
;
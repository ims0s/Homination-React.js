import { Component ,useRef } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import '../Login/login.style.css'
import axios from "axios";
import './register.style.css'
class Register extends Component{
    constructor(){
        super();

        this.state={
            validate:false,
            auth:{email:'',
            password:'',
            username:'',},
            passwordRules:[
                {
                    name:'6-16 Characters',
                    state:'invalid'
                },
                {
                    name:'At least one Uppercase, Lowercase and Number',
                    state:'invalid'
                },

            ],
        }
        
    }
    submitHandler=(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }else{
            event.preventDefault();
            event.stopPropagation();
            axios.post('http://localhost:5000/auth/register',this.state.auth)
            .then(res => res.json)
            .then(data => {console.log(data);
                this.props.nav('/login');
            }).catch((e)=>console.log(e))
            
        }

        this.setState(() => ({validate:true}))
    }

    passwordRules=()=>{
        return this.state.passwordRules.map((i)=>{
            return (<p id={i.name} className={i.state}>{i.name}</p>)
        })
    }

    Popover =() =>{
       const {passwordRules}=this
       
        return( 
       <Popover id="popover-contained">
            <Popover.Header as="h3">Password should contians :</Popover.Header>
            <Popover.Body>
                {passwordRules()}
            </Popover.Body>
        </Popover>)
    }
    onChangeHandler= (e)=>{
        const {id,value} = e.target
        this.setState(()=>({auth:{...this.state.auth,[id]:value}}))
    }

    passwordOnchange=(e=>{
        const {id,value,validity} = e.target
        const {passwordRules}=this.state
        
        if(value.length <= 16 &&!validity.tooShort&&value!==''){
            passwordRules[0].state='valid'
        }else{
            passwordRules[0].state='invalid'
            
        }
        if(!validity.patternMismatch&&value!==''){
            passwordRules[1].state='valid'
        
        }else{
            passwordRules[1].state='invalid'
        }
        this.setState(()=>({auth:{...this.state.auth,[id]:value}}))
    })

    render(){
        const {validate,auth}= this.state
        const {onChangeHandler , submitHandler , Popover,} =this;
        
        return(
            <Container className="authContainer" >
               
               <Form className="authForm" noValidate validated={validate} onSubmit={submitHandler}>
                <h1> Homination</h1>
               <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={onChangeHandler} required/>
                    <Form.Control.Feedback type="invalid">
                        Enter your Username!!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="example@email.com" onChange={onChangeHandler}   required />
                    <Form.Control.Feedback type='invalid' >
                    Enter your email like this : example@email.com
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <OverlayTrigger trigger="focus" placement="right" overlay={Popover()}>
                        <Form.Control type="password" placeholder="Password" onChange={this.passwordOnchange} 
                            minLength={6} pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}' required
                        />
                    </OverlayTrigger>
                    <Form.Control.Feedback type="invalid">
                        Enter your password!!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="re-enter-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter Password" pattern={`^${auth.password}$`}  required />
                    <Form.Control.Feedback type="invalid">
                        Its not the same.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
                <p>Already Have Account? <span className="anotherPage" onClick={() => {this.props.nav('/Login')}}>Login</span></p>
            </Form>
            </Container>
        )
    }
}

const RegisterHooks=(props)=>{

    return (<Register
        {...props} 
        nav = {useNavigate()}
        ref={useRef()}
    />)
}
export default RegisterHooks;
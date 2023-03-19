import { Component } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import './login.style.css'
import axios from "axios";

class Login extends Component{
    constructor(){
        super();

        this.state={
            validate:false,
            username:'',
            password:''
        }

    }
    submitHandler=(event) => {
        const form = event.currentTarget;
        const {username,password}=this.state
        const {nav} =this.props
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }else{
            // this.props.nav('/')
            event.preventDefault();
            event.stopPropagation();
            axios.post('http://localhost:5000/auth/login',{username,password})
            .then(res => res.data )
            .then(()=> nav('/')).catch(res => {
                const {data}= res.response;
                this.setState(() => ({data}))
            })
        }

        this.setState(() => ({validate:true}))
    }


    onChangeHandler= (e)=>{
        const {id,value} = e.target
        this.setState(()=>({[id]:value}))
    }
    

    render(){
        const {validate}= this.state
        const {onChangeHandler , submitHandler} =this;
        return(
            <Container className="authContainer" >
               
                <h1>Homination</h1>
               <Form className="authForm" noValidate validated={validate} onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="example@email.com" onChange={onChangeHandler}   required />
                    <Form.Control.Feedback type='invalid' >
                    Enter your Username
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onChangeHandler} required/>
                    <Form.Control.Feedback type="invalid">
                        Enter your Password!!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {this.state.data && <span> {this.state.data}</span>}
            </Form>
            </Container>
        )
    }
}
const LoginHooks= (props)=>{
    const nav = useNavigate();
    
    return ( 
        <Login 
        {...props}
        nav={nav}
        />
        )
    }
    export default LoginHooks;
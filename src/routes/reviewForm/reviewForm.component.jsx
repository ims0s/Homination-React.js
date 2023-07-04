import { Component ,useContext} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { UserContext } from "../../context/auth.context";
import Modal from "react-bootstrap/Modal"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { CDBRating, CDBContainer } from 'cdbreact';
import StarRatings from "react-star-ratings";
import axios from 'axios'
class ReviewForm extends Component{
    constructor(){
        super();
        
        this.state={
            show:true,
            rating:0,
        }
    }

    changeRating=( newRating, name )=> {
        this.setState({
          rating: newRating
        });
      }
      onsubmitHandler=()=>{
        const {provider}=this.props.params;
        const {username,profilePic}=this.props.UserContext.currentUser
        const {rating,comment}=this.state;
        const {REACT_APP_BACKEND_API}=process.env
        const review={
            client_Name:username,
            provider_Name:provider,
            rating,
            comment,
            image:profilePic,
        }
        axios.post(`${REACT_APP_BACKEND_API}reviews/create`,review).then(res=>res.data)
        .then(data=>{
            console.log(data)
            this.onhide();
        })
      }
    
    onhide = ()=>{
        this.setState(()=>({show:false}))
        setTimeout(()=>{
            this.props.navigate('../../')
        },500)
    }
    render(){
        const {show}=this.state
        
        return(
            <Modal show={show} onHide={this.onhide} >
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                    Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="mb-3">Rating</h3>
                    <StarRatings
                    rating={this.state.rating}
                    starRatedColor="yellow"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    starHoverColor="yellow"
                    starDimension="28px"
                    />

                    <h3 className="my-3">Comment</h3>
                    <Form.Control as='textarea' onChange={(e)=>(this.setState(()=>({comment:e.target.value})))} id='comment' />
                    
                    <Button onClick={this.onsubmitHandler} className="mt-3">Submit</Button>
                </Modal.Body>
            </Modal>
        )
    }

}

const ReviewFormHooks=(props)=>{

    return(
        <ReviewForm
            {...props}
            params={useParams()}
            navigate={useNavigate()}
            UserContext={useContext(UserContext)}
        />
    )
}

export default ReviewFormHooks;
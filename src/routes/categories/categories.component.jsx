import { Component,useContext } from "react";
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import { Outlet,useParams } from "react-router-dom";
import './categories.style.css'
import ListGroupItem from "../../components/listGroupItem/listGroupItem.component";
import { CategoryContext } from "../../context/category.context";


class Categories extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            show:false,
            type:null,
          }
          
          
    }

    componentDidMount(){
      
        let {type} = this.props.params;
        type = type.charAt(0).toUpperCase()+type.slice(1);
        
        fetch(`http://localhost:5000/services?cat=${type}`).then(res => res.json()).then(data => this.setState(()=>({data,type})))

      

      
    }
    componentDidUpdate(){
      
      let {type} = this.props.params;
        type = type.charAt(0).toUpperCase()+type.slice(1);
        if(type !==this.state.type){

          fetch(`http://localhost:5000/services?cat=${type}`).then(res => res.json()).then(data => this.setState(()=>({data,type})))
        }
    }

    show =() => {
     
        const {data}=this.state;
        return data.map(this.view)
      }


    view = (card) => {
        
        const {title,provider,_id,desc,categories}=card;
        return(
          
            <ListGroupItem title={title} categories={categories} username={provider} desc={desc} key={_id} id={_id} photo="https://st.hzcdn.com/fimgs/9721524c0144b220_9930-w368-h207-b0-p0---.jpg"/>
          
        )
      }
      setShow=()=>{
        this.setState(()=>{return{show:true}})
      }

      

    render(){
        return (
            <Container className="transparent" id="CategoriesContainer">
                <ListGroup>
                  {this.show()}
                </ListGroup>
                <Outlet photo="https://st.hzcdn.com/fimgs/9721524c0144b220_9930-w368-h207-b0-p0---.jpg" />
                
            </Container>
        )
    }
}
const CategoriesHooks= (props) =>{
  
  return (
    <Categories 
      {...props}
      categoryContext={useContext(CategoryContext)}
      params={useParams()}
    />
  )
}
export default CategoriesHooks;
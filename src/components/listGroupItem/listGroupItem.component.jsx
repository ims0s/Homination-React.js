import { Component } from "react";
import  Figure  from "react-bootstrap/Figure";
import Item from "react-bootstrap/ListGroupItem"
import { useNavigate } from "react-router-dom";
import "./listGroupItem.style.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
class ListGroupItem extends Component {

    onClickHandler = () => {
        const {id} = this.props
        console.log(id)
        this.props.Navigate(`./details/${this.props.id}`)
    }

    render() {
        const {title,id,provider,photo,desc}=this.props
        
        return (
            <Item action onClick={this.onClickHandler} className='categoryItem' id={id} >
                <Row className="row">
                    <Col lg={7} xs={12} className='column'><h3>{title}</h3></Col>
                    <Col className="provider column">
                        <Image src="https://robohash.org/fatma?set=set4&size=50x50" alt="provider img" rounded/>
                        <h6>{provider}</h6>
                    </Col>
                </Row >
                <Row className="mt-1">
                    <Col lg={8}>
                        <h5>{desc}</h5>
                    </Col>

                    <Col lg={4} className='itemImage mt-1'>
                    <Figure>
                        <Figure.Image width={300} height={168.75} src={photo} />
                    </Figure>
                    </Col>
            
                </Row>
            </Item>
        )
    }
}


const ListGroupItemHook = (props) => {
    return (
        <ListGroupItem
            {...props}
            Navigate={useNavigate()}
        />
    )

}


export default ListGroupItemHook;
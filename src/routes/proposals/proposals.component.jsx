import { Component,useContext,Fragment } from "react";
import { CDBTable, CDBTableBody, CDBTableHeader } from "cdbreact";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/auth.context";
import Dropdown from 'react-bootstrap/Dropdown'
import './proposals.style.css'
class Proposals extends Component{

    constructor(){
        super();

        this.state={
            data:[]
        }
    }

    componentDidMount(){
        const { REACT_APP_BACKEND_API } = process.env
        const { currentUser } = this.props.UserContext
        const { username, token } = currentUser
        axios.get(`${REACT_APP_BACKEND_API}requests/client/${username}`, { headers: { "Authorization": token } })
        .then(res => this.setState(()=>({data:res.data})))

    }

    showData=()=>{
        const data = this.state.data
        

        return (
            data.map(e => {
                const {client_Name,status,Request_Description,_id}=e;
                const {propertyInMeter,location,property_Type,request_Desc}=Request_Description
                
                return (
                    <tr key={_id} className="tableRow">
                        <td>{client_Name}</td>
                        <td className="table-rem">{property_Type}</td>
                        <td className="table-rem "> <p className="proposals-desc">{request_Desc}</p></td>
                        <td className="table-rem">  {location}</td>
                        <td className="table-rem">{`${propertyInMeter} ㎡`}</td>
                        <td className={`text-${this.statusColor(status)} text-center`}>{status}</td>
                    </tr>
                )
            })
        )
    }


    statusColor=(status)=>{
        if(status==='pending'){
            return 'secondary'
        }else if(status==='accepted'){
            return 'success'
        }else{
            return 'danger'
        }

    }

    render(){

        return(
            <div className="card-bg w-100 d-flex flex-column wide  d-flex flex-column p-3">
                <div className="d-flex flex-column p-0 h-100">
                    <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                        <h4 className="font-weight-bold text-dark h5">Last Proposals</h4>
                    </div>
                    <CDBTable borderless responsive>
                        <CDBTableHeader color="light">
                            <tr>
                                <th>Client Name</th>
                                <th className="table-rem">Property Type</th>
                                <th className="table-rem">Description</th>
                                <th className="table-rem">Location</th>
                                <th className="table-rem">Area</th>
                                <th>Status</th>
                            </tr>
                        </CDBTableHeader>
                        <CDBTableBody>
                            {this.showData()}
                        </CDBTableBody>
                    </CDBTable>
                </div>
            </div>
        )
    }
}

const ProposalsHooks=(props)=>{

    return (
        <Proposals
            {...props}
            UserContext={useContext(UserContext)}
            navigate={useNavigate()}
        />
    )
}

export default ProposalsHooks;
import React, {Component} from 'react';
import { SERVER_URL } from '../constants';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Userlist extends Component{
    constructor(props){
        super(props);
        this.state = {users: []};
    }

    componentDidMount(){
        this.fetchUsers();
    }

    onDelClick = (link) => {
        fetch(link, {method:'DELETE'})
        .then(res => {
            toast.success("Car deleted", {
                position: toast.POSITION.BOTTOM_LEFT
            });
            this.fetchUsers();
        })
        .catch(err => {
            toast.error("Error when deleting",{
                position: toast.POSITION.BOTTOM_LEFT
            });
            console.error(err);
        })
    }

    fetchUsers = () => {
        fetch(SERVER_URL + 'api/users')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    users: responseData._embedded.users
                });
            })
            .catch(err => console.err(err));
    }

    render(){
        const columns = [
            {
                Header: 'First Name',
                accessor: 'firstName'
            },{
                Header: 'Last Name',
                accessor: 'lastName'
            },{
                Header: 'Address',
                accessor: 'address'
            },{
                Header: 'Gender',
                accessor: 'gender'
            },{
                id: 'delbutton',
                sortable: false,
                filterable: false,
                width: 100,
                accessor: '_links.self.href',
                Cell: ({value}) => 
                (<button onClick={()=>{this.onDelClick(value)}}>Delete</button>)
            }
        ]

        return(
            <div className = "App">
               <ReactTable data={this.state.users} columns={columns}
               filterable={true}/>
               <ToastContainer autoClose={1500}/>
            </div>
        );
    }
}

export default Userlist;
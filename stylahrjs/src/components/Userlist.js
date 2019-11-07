import React, {Component} from 'react';
import { SERVER_URL } from '../constants';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import AddUser from './AddUser.js';
import {CSVLink} from 'react-csv';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SnackBar from '@material-ui/core/SnackBar';

class Userlist extends Component{
    constructor(props){
        super(props);
        this.state = {users: [], open: false, message: ''};
    }

    

    componentDidMount(){
        this.fetchUsers();
    }

    onDelClick = (link) => {
        fetch(link, {method:'DELETE'})
        .then(res => {
            this.setState({open: true, message: 'Car deleted'});
            this.fetchUsers();
        })
        .catch(err => {
            this.setState({open: true, message: 'Error when deleting'});
            console.error(err);
        })
    }

    confirmDelete = (link) => {
        confirmAlert({
            message:'Are you sure to delete?',
            buttons:[
                {
                    label: 'Yes',
                    onClick: () => this.onDelClick(link)
                },{
                    label: 'No',
                }
            ]
        })
    }

    addUser(user){
        fetch(SERVER_URL + 'api/users', 
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => this.fetchUsers())
        .catch(err => console.error(err))
    }

    renderEditable = (cellInfo) =>{
        return(
            <div style={{backgroundColor: "#fafafa"}}
            contentEditable
            suppressContentEditableWarning
            onBlur={e=>{
                const data = [...this.state.users];
                data[cellInfo.index][cellInfo.column.id] =
                e.target.innerHTML;
                this.setState({users: data});
            }}
            dangerouslySetInnerHTML={{
                __html: this.state.users[cellInfo.index][cellInfo.column.id]
            }}
            />
        );
    }

    updateUser(user, link){
        fetch(link,
        {method:'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then( res=>
            this.setState({open: true, message: 'Changes saved'})
        )
        .catch(err=>
            this.setState({open: true, message: 'Error when saving'})
        )
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

    handleClose = (event, reason) => {
        this.setState({open: false});
    }

    render(){
        const columns = [
            {
                Header: 'First Name',
                accessor: 'firstName',
                Cell: this.renderEditable
            },{
                Header: 'Last Name',
                accessor: 'lastName',
                Cell: this.renderEditable
            },{
                Header: 'Address',
                accessor: 'address',
                Cell: this.renderEditable
            },{
                Header: 'Gender',
                accessor: 'gender',
                Cell: this.renderEditable
            },{
                Header: 'Birthday',
                accessor: 'birthday',
                Cell: this.renderEditable
            },{
                Header: 'Date Registered',
                accessor: 'dateRegistered',
                Cell: this.renderEditable
            },{
                id: 'savebutton',
                sortable: false,
                filterable: false,
                width: 100,
                accessor: '_links.self.href',
                Cell: ({value, row}) => 
                (<Button variant="text" color="primary"
                    onClick={()=>{this.updateUser(row, value)}}>Save</Button>)
            },{
                id: 'delbutton',
                sortable: false,
                filterable: false,
                width: 100,
                accessor: '_links.self.href',
                Cell: ({value}) => 
                (<Button variant="text" color="secondary"
                    onClick={()=>{this.confirmDelete(value)}}>Delete</Button>)
            }
        ]

        return(
            <div className = "App">
                <Grid container>
                    <Grid item>
                        <AddUser addUser = {this.addUser} fetchUsers={this.fetchUsers}/>
                    </Grid>
                    <Grid item style={{padding: 20}}>
                        <CSVLink data={this.state.users} separot=";">Export CSV</CSVLink>
                    </Grid>
                    
                </Grid>
                <ReactTable data={this.state.users} columns={columns} filterable={true}/>
                <SnackBar style={{width:300, color:'green'}}
                            open={this.state.open} onClose={this.handleClose}
                            autoHideDuration={1500} message={this.state.message}/>
            </div>
        );
    }
}

export default Userlist;
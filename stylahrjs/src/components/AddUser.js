import React from 'react';
import SkyLight from 'react-skylight';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

class AddUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {firstName: '', lastName: '', birthday: '', dateRegistered: '', gender: '', address: ''};
    }

    handleChange = (event) =>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        var newUser = {firstName:this.state.firstName,
            lastName:this.state.lastName,
            gender:this.state.gender,
            address:this.state.address,
            birthday:this.state.birthday,
            dateRegistered:this.state.dateRegistered};
        this.props.addUser(newUser);
        this.refs.addDialog.hide();
    }

    cancelSubmit = (event) =>{
        event.preventDefault();
        this.refs.addDialog.hide();
    }

    render(){
        return(
            <div>
                <SkyLight hideOnOverlayClicked ref="addDialog">
                    <h3>New User</h3>
                    <form>
                        <TextField label="First_Name" placeholder="First Name" name="firstName" 
                            onChange={this.handleChange}/><br/>
                        <TextField label="Last_Name" placeholder="Last Name" name="lastName" 
                            onChange={this.handleChange}/><br/>
                        <TextField label="Gender" placeholder="Gender" name="gender" 
                            onChange={this.handleChange}/><br/>
                        <TextField label="Address" placeholder="Address" name="address" 
                            onChange={this.handleChange}/><br/>
                        <TextField label="Birthday" placeholder="BirthDay" name="birthday" 
                            onChange={this.handleChange}/><br/>
                        <TextField label="Date_Registered" placeholder="Date Registered" name="dateRegistered" 
                            onChange={this.handleChange}/><br/>
                        <Button variant="contained" color="primary" 
                            onClick={this.handleSubmit}>Save</Button>
                        <Button variant="contained" color="secondary" 
                            onClick={this.cancelSubmit}>Cancel</Button>
                    </form>
                </SkyLight>
                <div>
                    <Button variant="contained" color="primary"
                    style={{'margin': '10px'}}
                    onClick={()=> this.refs.addDialog.show()}>New User</Button>
                </div>
            </div>
        );
    }
}

export default AddUser;
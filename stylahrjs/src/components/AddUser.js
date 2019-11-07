import React from 'react';
import SkyLight from 'react-skylight';

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
                        <input type="text" placeholder="First Name" name="firstName" 
                            onChange={this.handleChange}/><br/>
                        <input type="text" placeholder="Last Name" name="lastName" 
                            onChange={this.handleChange}/><br/>
                        <input type="text" placeholder="Gender" name="gender" 
                            onChange={this.handleChange}/><br/>
                        <input type="text" placeholder="Address" name="address" 
                            onChange={this.handleChange}/><br/>
                        <input type="text" placeholder="BirthDay" name="birthday" 
                            onChange={this.handleChange}/><br/>
                        <input type="text" placeholder="Date Registered" name="dateRegistered" 
                            onChange={this.handleChange}/><br/>
                        <button onClick={this.handleSubmit}>Save</button>
                        <button onClick={this.cancelSubmit}>Cancel</button>
                    </form>
                </SkyLight>
                <div>
                    <button style={{'margin': '10px'}}
                    onClick={()=> this.refs.addDialog.show()}>New User</button>
                </div>
            </div>
        );
    }
}

export default AddUser;
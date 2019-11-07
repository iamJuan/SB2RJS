import React, {Component} from 'react';
import './App.css';
import Userlist from './components/Userlist';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Login from './components/Login';

class App extends Component{
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <ToolBar>Users</ToolBar>
        </AppBar>
        <Login/>
      </div>
    );
  }
}

export default App;

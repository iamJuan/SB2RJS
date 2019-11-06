import React, {Component} from 'react';
import './App.css';
import Userlist from './components/Userlist';

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className = "App-header">
          <h1 className="App-title">Userlist</h1>
        </header>
        <Userlist/>
      </div>
    );
  }
}

export default App;

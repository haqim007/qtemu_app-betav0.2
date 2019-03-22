import React, { Component } from 'react';
import './App.css';
import NavBar from './component/Navbar';
import Content from './component/Content';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <NavBar /> 
        <Content/>         
      </div>
    );
  }
}

export default App;

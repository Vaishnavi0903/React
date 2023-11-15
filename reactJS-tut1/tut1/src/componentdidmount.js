
import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      data:"anil"
    }
  }
  componentDidMount()
  {
    console.warn("componentdidmount")
  }
  render() {
    console.warn("render")
    return (
      <div className="App">
        <h1>componentDidMount Method in React {this.state.data}</h1>
        <button onClick={()=>(this.setState({data:"siddhu"}))}>Update name</button>

      </div>

    );
  }

}


export default App;

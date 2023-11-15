
import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state={
      count:0
    }

  }
  shouldComponentUpdate()
  {
    console.warn("shouldComponentUpdate",this.state.count)
    if(this.state.count>5 && this.state.count<10)
    {
      return true;
    }
    return false; 
  }
  render() {

    return (
      <div className="App">
          <h1>Should Component Update {this.state.count}</h1>
          <button onClick={()=>this.setState({count:this.state.count+1})}>Update Counter</button>
      </div>

    );
  }

}


export default App;

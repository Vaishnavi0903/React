
import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

class App extends Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={
      count:0
    }
  }
  componentDidUpdate(preProps , preState , snapshot)
  {
    //1) console.warn("componentDidUpdate",preState)    //prestate ==> previous state
    console.warn("componentDidUpdate",preState.count,this.state.count)
    if(preState.count==this.state.count)    
    {
      alert("the data already exists")
    }
    
    // if(this.state.count<10)
    // {
    //   this.setState({count:this.state.count+1})
    // }
  }
  render() {
    console.warn("render")
    return (
      <div className="App">
        <h1>componentDidUpdate Method in React {this.state.count}</h1>
        {/*1) <button onClick={()=>this.setState({count:this.state.count+1})}>Update count</button> */}
        <button onClick={()=>this.setState({count:1})}>Update count</button>

      </div>

    );
  }

}


export default App;

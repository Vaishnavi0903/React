
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor()
  {
    super();
    this.state={
      data:'Anil'
    }
  
  }
  render() {
    return (
      <div className="App">
             <h1>Hello World from {this.state.data}</h1>
      </div>
    );
  }

}


export default App;

//API should never be called here bcoz the our html methods are not even ready to work on data fetched by API.It is usually
//called in the ComponentDidMount Method.


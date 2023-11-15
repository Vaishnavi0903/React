import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo, Component, createRef } from 'react';

class App extends Component {
  constructor()
  {
    super();
    this.inputRef = createRef();
  }
  componentDidMount()
  {
    //console.warn(this.inputRef.current.value ="1000")
  }
  getval()
  {
    console.warn(this.inputRef.current.value)
    this.inputRef.current.style.color ="red"
    this.inputRef.current.style.backgroundColor ="yellow"
  }
 render()
 {
   return (
     <div>
       <h1>Ref in ReactJS </h1>
       <input type='text' ref={this.inputRef}></input>
       <button onClick={()=>this.getval()}>Check Ref</button>
     </div>
   );
 }
}

export default App;

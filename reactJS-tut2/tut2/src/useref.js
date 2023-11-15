import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo, useRef } from 'react';

function App() {

  function handleInput() {
    console.warn("function hnadling input")
    //        inputRef.current.value = "1000"
    //        inputRef.current.focus();
    //        inputRef.current.style.color="red"
    //        inputRef.current.style.backgroundColor="yellow"
              inputRef.current.style.display = "none"
  }
  let inputRef = useRef(null)
  return (
    <div>
      <h1>UseRef in ReactJS </h1>
      <input type='text' ref={inputRef}></input>
      <button onClick={() => handleInput()}>Click me</button>
    </div>
  );
}

export default App;

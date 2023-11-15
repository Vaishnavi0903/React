import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo ,useRef } from 'react';

function App() {

  let inputRef1 = useRef(null)
  let inputRef2 = useRef(null)
  
  function SubmitForm(e) {
    e.preventDefault()
    console.warn("input field 1 value: ",inputRef1.current.value)
    console.warn("input field 2 value: ",inputRef2.current.value)

    let input3 = document.getElementById("input3").value
    console.warn("input 3 : ",input3)
  }
  return (
    <div>
      <h1>Uncontrolled Component in  ReactJS </h1>
      <form onSubmit={SubmitForm}>
        <input type='text' ref={inputRef1}></input><br></br><br></br>
        <input type='text' ref={inputRef2}></input><br></br><br></br>
        <input type='text' id="input3"></input><br></br><br></br>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

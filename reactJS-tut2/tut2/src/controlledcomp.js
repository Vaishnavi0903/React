import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo } from 'react';

function App() {
 
  let [val , setval] = useState("000")
  return (
    <div>
      <h1>Controlled Component in ReactJS </h1>
      <input type='text' value={val}  onChange={(e)=>setval(e.target.value)}></input>
      <h3>value: {val}</h3>
    </div>
  );
}

export default App;

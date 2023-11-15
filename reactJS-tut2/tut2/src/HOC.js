import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo } from 'react';

function App() {
  return (
    <div>
      <h1>Higher Order Component in  ReactJS </h1>
      <HOC_Red cmp={Counter} />
      <HOC_Yellow cmp={Counter} />
    </div>
  );
}
function HOC_Red(props) {
  return (
    <h2 style={{backgroundColor:'red' , width:200}}>
      Red <props.cmp />
    </h2>
  )
}
function HOC_Yellow(props) {
  return (
    <h2 style={{backgroundColor:'yellow' , width:200}}>
      Yellow <props.cmp />
    </h2>
  )
}
function Counter() {
  const [count, setcount] = useState(0)
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setcount(count + 1)}>Update</button>
    </div>
  )
}

export default App;

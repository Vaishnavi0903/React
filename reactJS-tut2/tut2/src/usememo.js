import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo } from 'react';

function App() {
  const [count, setcount] = useState(0)
  const [item, setitem] = useState(10)

  const multicountmemo = useMemo
  (
    function multicount() {
      console.warn("multicount")
      return count * 5
    } , [count]
  )

  return (
    <div>
      <h1>UseMemo Hook in ReactJS </h1>
      <h2>{multicountmemo}</h2>    
      {/* //call as a variable */}
      <h2>Count : {count} </h2>
      <button onClick={() => setcount(count + 1)}> Update Count</button>
      <h2>Count : {item} </h2>
      <button onClick={() => setitem(item * 10)}> Update Item</button>
    </div>
  );
}

export default App;

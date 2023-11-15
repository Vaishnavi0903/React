import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo } from 'react';

function App() {

  const [count, setcount] = useState(1)

  function updateCounter() {
    // let ran = Math.floor((Math.random()) * 10)
    // setcount((prev)=>
    // {
    //       console.warn(prev)  ;
    //       return ran;
    // })

    for(let i =0;i<5;i++)
    {
      setcount((prev)=>
      {
        return prev+1
      })
    }
  }

  return (
    <div>
      <h1> Previous State in  ReactJS  {count} </h1>
      <button onClick={() => updateCounter()}>Update Me </button>

    </div>
  );
}

export default App;

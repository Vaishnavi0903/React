/*
import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App(){
  const[name , setname] = useState("");
  const[tnc , settnc] = useState(false);
  const[choice , setchoice] = useState("");

  function getFormData(e)
  {
    console.log(name,choice,tnc)
    e.preventDefault()
  }
    return (
      <div className="App">
        <h1> Handling Forms </h1>
        <form onSubmit={getFormData}>
          <input type="text" placeholder="enter name" onChange={(e)=>setname(e.target.value)}></input><br></br><br></br>
          <select onChange={(e)=>setchoice(e.target.value)}>
            <option>Select option</option>
            <option>Marvel</option>
            <option>DC</option>
            <option>Bollywood</option>
          </select><br></br><br></br>
          <input type='checkbox' onChange={()=>settnc(!choice)}></input><span>Accept terms and conditions</span><br></br><br></br>
          <button type="submit">Submit now</button>
        </form>
      </div>
    );
  
}


export default App;
*/
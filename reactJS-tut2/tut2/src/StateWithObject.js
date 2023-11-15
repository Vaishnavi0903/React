import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data , setdata] = useState({name:"anil" , age:22})
  
  return (
    <div>
      <h1> State Object With Hooks </h1>
      {/* problem :-- when u try to update then either of the one is only visible and other one gets vanished */}
      {/* When we try to update setdata it assumes that it has only one property and it hides the other */}

      {/* <input type='text' placeholder='Enter name' value={data.name} onChange={(e)=>setdata({name:e.target.value})}/><br/>
          <input type='text' placeholder='Enter age' value={data.age}  onChange={(e)=>setdata({age:e.target.value})}/> */}

      {/* Solution:--  */}

      {/* Method-I */}
      <input type='text' placeholder='Enter name' value={data.name} 
       onChange={(e)=>setdata({age:data.age , name:e.target.value})}/><br/>

      {/* Method-II */}
      <input type='text' placeholder='Enter age' value={data.age}  
       onChange={(e)=>setdata({...data , age:e.target.value})}/>
       
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")

  function saveuser()
  {
    let data = {name,email}
    fetch("http://localhost:3000/posts",{
      method:"POST",
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>
    {
      result.json().then((resp)=>
      {
        console.warn("resp",resp)
      })
    })
  }
  return (
    < div className="App" >
      <h1>POST API method</h1>
      <input type="text" name='name' value={name} onChange={((e)=>setname(e.target.value))}/><br /><br />
      <input type="email" name='email' value={email} onChange={(e)=>setemail(e.target.value)}/><br /><br />

      <button type='button'onClick={saveuser}>Save New User</button>
    </div >
  );
}

export default App;

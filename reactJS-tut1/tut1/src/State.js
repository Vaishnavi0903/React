/* States in functional component
#App.js

import {useState}  from 'react'

function App() {
    let data = "Vaishnavi Sontakke"
    const[value,setData]=useState("vaishnavi")
    const[num,setnum]=useState(0)
    function apple()
    {
      data = "prem loves u"     /*if this statement was not written u would find Vaishnavi Sontakke in alert box*/ 
 /*     alert(data);
    }
    function UpdateData()
    {
      setData("Prem Satpute")
    }
    function UpdateNum()
    {
      setnum(num+1)
    }
    return (
      <div className="App">
        <h1>{data}</h1>
        <button onClick ={apple}>Click me</button>
        <h2>{value}</h2>
        <button onClick={UpdateData}>Update me</button>
        <h2>I love u {num} % </h2>
        <button onClick={UpdateNum}>Pls Click me</button>
  
      </div>
    );
  }
  
  
  
  
  export default App;
*/  
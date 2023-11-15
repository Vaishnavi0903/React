/*import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';


function App(){

    const [data,setdata] =useState(null)
    const [print,setprint] =useState(false)
    function getdata(val)
    {
       console.log(val.target.value)
       setdata(val.target.value)
       setprint(false)            /**on removing input value will be hidden */
/*   }
    return (
      <div className="App">
        <h1> Get Input box value </h1>
        {
               print? <h1>{data}</h1>:null       
        }
        <input type='text' onChange={getdata}/>
        <button onClick={()=>setprint(true)}>print data</button>
      </div>
    );
  
}


export default App;
*/
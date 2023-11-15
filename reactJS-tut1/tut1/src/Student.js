/* Props in functional component */



function Student(props)
{
    console.log(props)
    return(
        <div style={{backgroundColor: "skyblue",margin: 10}}>
            <h2> Hello  {props.name}</h2>
           {/* <h3>Email : {props.email}</h3>
            <h4>Address : {props.other.address}</h4>
            <h4>Mobile : {props.other.mobile}</h4>*/}
        </div>
    )
}

/* App.js

import Student from './Student'
import React,{useState} from 'react'


function App() {
  
  const [name,setname] = useState("Anil")
  return (
    <div className="App">
      <h1>Props in React   </h1>
     {/* <Student name = {"anil"} email="anil@test.com" other = {{address:'delhi' , mobile : '7977946030' }}/>
      <Student name = {"peter"} email="peter@test.com" other = {{address:'mumbai' , mobile : '2345678888' }}/>*/ /*}

      <Student name ={name}/>
      <button onClick={()=>(setname("Siddhu"))}>Update Name</button>
    </div>
  );
}
*/ 

export default Student
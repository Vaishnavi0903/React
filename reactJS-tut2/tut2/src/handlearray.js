import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {


  const students = ['anil', 'siddhu', 'peter', 'sam']

  const details =
    [
      { name: 'anil', mobile: 888, email: 'anil@gmail.com' },
      { name: 'sam', mobile: 111, email: 'sam@gmail.com' },
      { name: 'siddhu', mobile: 222, email: 'siddhu@gmail.com' }
    ]

  {/*//map looping
  students.map(
    (item)=>{
        console.log("My name is :", item)
  })

  //for loop
  for(let i=0;i<students.length;i++)
  {
    console.log("In for loop My name is :", students[i])
  }
*/}


  return (
    <div className="App">
      <h1>Handle array with List</h1><br></br>
      <table border="4">
              <tr>
                <td>Name</td>
                <td>Contact</td>
                <td>Email </td>
              </tr>
        {
          // students.map(
          //   (data) => 
          //         <h3>Name is : {data}</h3>
          // )

          details.map(
            (data) =>
              <tr>
                <td>{data.name}</td>
                <td>{data.mobile}</td>
                <td>{data.email} </td>
              </tr>
          )
        }
      </table>

    </div>
  );
}

export default App;

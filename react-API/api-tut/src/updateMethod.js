import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setdata] = useState([])
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [userID, setuserID] = useState("")

  useEffect(() => {
    getList()
  }, [])

  function getList()           //to automatically generate updated list  
  {
    fetch("http://localhost:3000/posts").then(
      (result) => {
        result.json().then(
          (resp) => {
            //console.warn("result", resp)
            setdata(resp)
            //set id1 data pre-filled in form by default..
            //Then by clicking update button u can access specific id-data
            setname(resp[0].name)
            setemail(resp[0].email)
            setuserID(resp[0].id)  //--->use 'id' & not 'userID'
          })
      })
  }

  function selectUser(id) {
    console.warn(data[id - 1])
    let item = data[id - 1]                   //returns name and email of the id
    setname(item.name)
    setemail(item.email)
    setuserID(item.id)   //--->use 'id' & not 'userID'
  }


  function deleteUser(id) {
    // alert("Are you sure you want to delete data with "+id+"?")
    fetch(`http://localhost:3000/posts/${id}`,
      { method: 'DELETE' }).then((result) => {
        result.json().then((resp) => {
          //console.warn("resp", resp)
          getList()
        })
      })
  }


  function updateUser() {
    //console.warn(name, email, userID)
    let item = { name, email, userID }
    fetch(`http://localhost:3000/posts/${userID}`,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      }).then((result) => {
        result.json().then((resp) => {
          //console.warn("resp", resp)
          getList()
        })
      })
  }

  return (
    < div className="App" >
      <h1>UPDATE Method with API</h1>
      <table border="1px">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Opeartion</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, i) =>

              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
                <button onClick={() => selectUser(item.id)}>Update</button>
              </tr>
            )}
        </tbody>
      </table>
      <br />
      <br />
      <br />

      <div>
        <input type='text' value={name} onChange={(e) => setname(e.target.value)} /><br /><br />
        <input type='text' value={email} onChange={(e) => setemail(e.target.value)} /><br /><br />
        <button onClick={() => updateUser()}>Update user</button>
      </div>
      
    </div >
  );
}

export default App;

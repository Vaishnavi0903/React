import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setdata] = useState([])
  const [name, setname] = useState("")
  const [email, setemail] = useState("")

  useEffect(() => {
    getList()
  }, [])

  function getList()           //to automatically generate updated list  
  {
    fetch("http://localhost:3000/posts").then(
      (result) => {
        result.json().then(
          (resp) => {
            console.warn("result", resp)
            setdata(resp)
            // setname(resp[0].name)
            // setemail(resp[0].email)
          })
      })
  }

  function deleteUser(id) {
    // alert("Are you sure you want to delete data with "+id+"?")
    fetch(`http://localhost:3000/posts/${id}`,
      { method: 'DELETE' }).then((result) => {
        result.json().then((resp) => {
          console.warn("resp", resp)
          getList()
        })
      })
  }

  function selectUser(id) {              //to alrady fill the form to update the user
    console.warn(data[id - 1])
    let item = data[id - 1] //returns name and email of that specific-id
    setname(item.name)
    setemail(item.email)
  }

  return (
    < div className="App" >
      <h1>Pre-Filled Form</h1>
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
        <input type='text' value={name} /><br /><br />
        <input type='text' value={email} /><br /><br />
        <button>Update user</button>
      </div>
    </div >
  );
}

export default App;

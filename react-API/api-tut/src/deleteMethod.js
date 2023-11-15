import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setdata] = useState([])
  useEffect(() => {
    getList()
  }, [])

  function getList()           //to automatically generate updated list after deletion 
  {
    fetch("http://localhost:3000/posts").then(
      (result) => {
        result.json().then(
          (resp) => {
            console.warn("result", resp)
            setdata(resp)
          })
      })
  }


  function deleteUser(id) {
    // alert("Are you sure you want to delete data with "+id+"?")
    fetch(`http://localhost:3000/posts/${id}`,
      { method: 'DELETE' }).then((result)=>
      {
        result.json().then((resp)=>
        {
               console.warn("resp",resp)
               getList()
        })
      })
  }

  return (
    < div className="App" >
      <h1>DELETE method with API</h1>
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
              </tr>
            )}
        </tbody>
      </table>
    </div >
  );
}

export default App;

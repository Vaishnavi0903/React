import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/posts").then(
      (result) => {
        result.json().then(
          (resp) => {
            console.warn("result", resp)
            setdata(resp)
          })
      })
  }, [])
  console.warn(data)
  return (
    < div className="App" >
      <h1>Call GET method</h1>
      <table border="1px">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) =>

              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            )}
        </tbody>
      </table>
    </div >
  );
}

export default App;

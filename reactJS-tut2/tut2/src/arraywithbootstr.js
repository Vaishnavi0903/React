import logo from './logo.svg';
import './App.css';
import React from 'react';
import Table from 'react-bootstrap/Table';

function App() {
  const details =
    [
      { name: 'anil', mobile: 888, email: 'anil@gmail.com' },
      { name: 'sam', mobile: 111, email: 'sam@gmail.com' },
      { name: 'siddhu', mobile: 222, email: 'siddhu@gmail.com' },
      { name: 'peter', mobile: 333, email: 'peter6@gmail.com' }
    ]
  return (
    <div className="App">
      <h1>List With Bootstrap Table</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>mobile</td>
          </tr>
          {
            details.map(
              (data, i) =>
                <tr key={i}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.mobile}</td>
                </tr>

                /** Conditional showing of rows in table */

                // details.map((data,i) =>
                // data.mobile === "111" ?
                // <tr key={i}>
                //   <td>{data.name}</td>
                //   <td>{data.email}</td>
                //   <td>{data.mobile}</td>
                // </tr> : null)
            )

          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;

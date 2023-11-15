import logo from './logo.svg';
import './App.css';
import React from 'react';
import Table from 'react-bootstrap/Table';

function App() {
  const details =
    [
      { name: 'anil', mobile: 888, address: [{ Hn: "10", City: "Noida", State: "Goa" }, { Hn: "10", City: "Noida", State: "Goa" }, { Hn: "10", City: "Noida", State: "Goa" }] },
      { name: 'sam', mobile: 111, address: [{ Hn: "220", City: "Noida", State: "Goa" }, { Hn: "10", City: "Noida", State: "Goa" }, { Hn: "10", City: "Noida", State: "Goa" }] },
      { name: 'siddhu', mobile: 222, address: [{ Hn: "230", City: "Noida", State: "Goa" }, { Hn: "10", City: "Noida", State: "Goa" }, { Hn: "10", City: "Noida", State: "Goa" }] },
      { name: 'peter', mobile: 333, address: [{ Hn: "4", City: "Noida", State: "Goa" }, { Hn: "10", City: "Noida", State: "Goa" }, { Hn: "10", City: "Noida", State: "Goa" }] }
    ]
  return (
    <div className="App">
      <h1>List With Bootstrap Table</h1>
      <Table striped>
        <tbody>
          <tr>
            <td>Sr no.</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
          </tr>
          {
            details.map(
              (item,i) =>
                <tr key={i}>
                  <td>{++i}</td>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <Table variant='dark' striped>
                      <tbody>
                        <tr>
                          <td>Sr no.</td>
                          <td>House no.</td>
                          <td>City</td>
                          <td>State</td>
                        </tr>
                        {
                          item.address.map(
                            (data , j) =>
                              <tr key={j}> 
                                <td>{data.Hn}</td>
                                <td>{data.City}</td>
                                <td>{data.State}</td>
                              </tr>
                          )
                        }
                      </tbody>
                    </Table>
                  </td>
                </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;

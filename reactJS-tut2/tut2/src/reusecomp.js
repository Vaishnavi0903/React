function ReuseComp(props)
{
    return(
        <div>
            <span> User {props.data.name} </span>
            <span> User {props.data.email} </span>
            <span> User {props.data.mobile} </span>
            <button>Click me</button>
        </div>
        
    )
}

export default ReuseComp;


//#App.js
// import logo from './logo.svg';
// import './App.css';
// import ReuseComp from './reusecomp';
// import React from 'react';
// import Table from 'react-bootstrap/Table';

// function App() {
//   const details =
//     [
//       { name: 'anil', mobile: 888, email: "anil@gmail.com" },
//       { name: 'sam', mobile: 111, email: "sam@gmail.com" },
//       { name: 'siddhu', mobile: 222, email: "siddhu@gmail.com" },
//       { name: 'peter', mobile: 333, email: "peter@gmail.com" }
//     ]
//   return (
//     <div className="App">
//       <h1>List With Bootstrap Table</h1>
//       {
//         details.map(
//           (item, i) =>
//             <ReuseComp data={item}/>
//         )
//       }
//     </div>
//   );
// }

// export default App;

// #USE-EFFECT HOOKS IN REACT-JS

// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react';


// function App() {

//   const [count, setcount] = useState(0)
//   useEffect(
//     () => {
//       console.warn("useEffect")
//     }
//   )
//   return (
//     <div className="App">
//       <h1>UseEffect in React {count}</h1>
//       <button onClick={()=>setcount(count+1)}>Update Me</button>
//     </div>
//   );

// }


// export default App;


//<--------------------------------------------------------------------------------------->
//# USE-EFFECT WITH STATES IN REACT-JS


// import logo from './logo.svg';
// import './App.css';
// import React, { useState ,useEffect } from 'react';


// function App() {

//   const [count , setcount] = useState(0)
//   const [name , setname] = useState(100)
//   useEffect(
//     () => {
//        console.warn("use effect warn called for count")
//     },[count]
//   )
//   useEffect(
//     () => {
//        console.warn("use effect warn called for name")
//     },[name]
//   )
//   return (
//     <div className="App">
//       <h1>UseEffect in React {name} -- {count}</h1>
//       <button onClick={()=>setcount(count+1)}>Update Count</button>
//       <br></br><br></br>
//       <button onClick={()=>setname(name+1)}>Update Name</button>


//     </div>
//   );

// }


// export default App;


//<------------------------------------------------------------------------------------------>

//# USE-EFFECT WITH PROPS IN REACT-JS


import React, { useState ,useEffect } from 'react';


function UseEffect(props) {
  useEffect(
    () => {
       console.warn("useEffect on count!")
    },[props.count]
  )
  return (
    <div className="App">
      <h2>Count Props : {props.count}</h2>
      <h2>Name Props : {props.name}</h2>
    </div>
  );

}

export default UseEffect;

// #App.js

// import logo from './logo.svg';
// import './App.css';
// import UseEffect from './useEffect';
// import React, { useState ,useEffect } from 'react';


// function App() {
//   const [count , setcount] = useState(0)
//   const [name , setname] = useState(100)
//   return (
//     <div className="App">
//       <h1>UseEffect in React </h1>
//       <UseEffect count={count} name={name} />
//       <button onClick={()=>setcount(count+1)}>Update Count</button>
//       <br></br><br></br>
//       <button onClick={()=>setname(name+1)}>Update Name</button>


//     </div>
//   );

// }


// export default App;


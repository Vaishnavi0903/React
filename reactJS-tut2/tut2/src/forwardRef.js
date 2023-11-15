import React,{forwardRef} from "react"

function ForwardRef(props,reff)
{
    return(
        <div>
            <input type="text" ref={reff}></input>
        </div>
    )
}

export default forwardRef(ForwardRef);

//#App.js

// import logo from './logo.svg';
// import './App.css';
// import ForwardRef from './forwardRef';
// import React, { useState, useMemo, useRef } from 'react';

// function App() {
 
//   let inputRef = useRef(null);

//   function updateInput()
//   {
//     inputRef.current.value = "1000"
//     inputRef.current.style.color="red"
//     inputRef.current.focus();
//   }
//   return (
//     <div>
//       <h1>forwardRef in ReactJS </h1>
//       <ForwardRef ref={inputRef}/>
//       <button onClick={()=>updateInput()}>Update input box</button>
      
//     </div>
//   );
// }

// export default App;

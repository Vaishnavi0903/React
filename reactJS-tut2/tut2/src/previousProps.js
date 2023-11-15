import React,{useEffect,useRef} from "react";
function PreviousProps(props)
{
    const lastVal = useRef();  
    //useRef will take the last value from DOM and execute useEffect() before return is executed.
    useEffect(()=>
    {
        lastVal.current=props.count
    })

    const previousProps = lastVal.current
    return(
        <div>
           <h1>Current Val {props.count}</h1>
           <h1>Previous Val {previousProps}</h1>
           
        </div>
    )
}
export default PreviousProps


// App.js
// import logo from './logo.svg';
// import './App.css';
// import PreviousProps from './previousProps';
// import { useState } from 'react';

// function App() {
//   const [count , setcount] = useState(0)
//   return (
//     <div>
//       <h1> Previous Props in  ReactJS  </h1>
//       <PreviousProps count={count}/>
//       <button onClick={()=>setcount(Math.floor(Math.random()*10))}>Update Counter</button>
//     </div>
//   );
// }

// export default App;

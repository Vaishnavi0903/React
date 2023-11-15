import React, { Component } from "react";

class Renderlifecycle extends Component
{
    constructor()
    {
        super();
        this.state={
            data:"Anil"
        }
    }
    
    render()
    {
        // console.warn("render method" , this.props)
        console.warn("render method")
        return(
               <div>
                {/* <h1>Hello everyone {this.props.name}</h1> */}

                <h1>    HEllo world {this.state.data} </h1>
                <button onClick={()=>this.setState({data:"SIddhu"})}>Update me</button>
               </div>
        );
    }
}

export default Renderlifecycle



//#App.js

// import logo from './logo.svg';
// import './App.css';
// import Renderlifecycle from './renderlifecycle';
// import React,{useState} from 'react';


// function App() {
//   const [name,setname] = useState("Anil")
//   return (
//     <div className="App">
//         <h1>Render Method in React</h1>
//         {/* <Renderlifecycle name={name}/> */}
//         {/* <button onClick={()=>setname("Siddhu")}>Update name</button> */}

//         <Renderlifecycle/>
//     </div>
//   );

// }


// export default App;



//All code in comments is for props
// Render lifecycle methods run for three times:
//        1) when ready stage 
//        2) when states are updated
//        2) when props are updated




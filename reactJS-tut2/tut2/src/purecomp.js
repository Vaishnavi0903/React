import { Component, PureComponent } from "react";

class PureComp extends PureComponent
{
    
    render()
    {
        console.log("user comp check re-rendering")
        return(
            <div>
            <h1>User Component {this.props.count}</h1>
            
          </div>
        );
    }
}

export default PureComp;


//#App.js
// import logo from './logo.svg';
// import './App.css';
// import React, { Component, PureComponent } from 'react';
// import PureComp from './purecomp';

// class App extends Component {
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }
//   render() {

//     return (
//       <div>
//         <PureComp count={this.state.count}/>
//         <button onClick={()=>this.setState({count:this.state.count})}>Update count</button>
//       </div>
//     );
//   }
// }

// export default App;




//CAN BE DONE FOR STATES AS WELL
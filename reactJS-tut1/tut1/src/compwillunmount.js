import React, { Component } from "react";

class CompWillUnmount extends Component
{
    componentWillUnmount()
    {
        alert("called comp. unmount")
    }
    render()
    {
        return(
             <div>
                   <h1>Student Component</h1>
             </div>
        );
    }
}
export default CompWillUnmount


// #App.js

// import logo from './logo.svg';
// import './App.css';
// import React, { Component, useState } from 'react';
// import CompWillUnmount from './compwillunmount';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true
//     }
//   }
//   render() {

//     return (
//       <div className="App">
//         {this.state.show ? <CompWillUnmount /> : <h1>Child component removed</h1>}
//         <button onClick={() => this.setState({ show: !this.state.show })}>Toggle Child Component</button>
//         {/* everytime show:false ...alert msg occurs */}
//       </div>

//     );
//   }

// }


// export default App;

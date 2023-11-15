import React, { Component } from 'react'

/*Props in Class Component*/

class Stud extends Component{

    render()
    {
        return(
            <div style={{backgroundColor:'skyblue' }}>
                <h1>Student : {this.props.name}</h1>
                <h3>Email : {this.props.email}</h3> 
            </div>
        )
    }
}

export default Stud;

/**#App.js
 

import logo from './logo.svg';
import './App.css';
import Stud from './Stud'
import React, { useState } from 'react'

class App extends React.Component {

  constructor(){

    super();
    this.state={
      name : "Anil",
      email : "anil@gmail.com"
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Props in React   </h1>
        <Stud name={this.state.name} email={this.state.email}></Stud>
        {/*<Stud name="peter" email="peter@gmail.com"></Stud>*/
       /* <button onClick={()=>this.setState({name:"Peter" , email:"peter@gmail.com"})}>Update me</button>
      </div>
    );
  }
}


export default App;
 


 */
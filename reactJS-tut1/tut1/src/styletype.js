//# App.js

import logo from './logo.svg';
import './App.css';
import './style.css'
import style from './custom.module.css'
import React,{useState} from 'react';


function App() {
  return (
    <div className="App">
      {/* Normal stylesheet :-- style.css */}
        <h1 className='primary'> Style1 in CSS </h1>
      {/* Inline CSS */}
        <h1 style={{color:"pink" , backgroundColor:"grey"}}> Style2 in CSS </h1>
      {/* CSS with Module :-- custom.module.css */}
        <h1 className={style.success}> Style3 in CSS </h1>
    </div>
  );

}


export default App;

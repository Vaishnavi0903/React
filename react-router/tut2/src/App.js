import logo from './logo.svg';
import './App.css';
import Home from './form/Home'
import About from './form/About'
import Contact from './form/contact';
//import Page404 from './form/Page404';
import Param from './form/Params';
import NavBar from './form/NavBar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Company from './form/company';
import Channel from './form/channel';
import Login from './form/Login';
import ProtectedRoute from './form/ProtectedRoute';
import { Component } from 'react';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/about" element={<ProtectedRoute Component={About} />} />
          <Route path='/user/:name' element={<Param />} />
          <Route path='/contact/' element={<Contact />}>
            <Route path='company' element={<Company />} />
            <Route path='channel' element={<Channel />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

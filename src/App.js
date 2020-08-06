import React from 'react';
import './App.css';
import Navibar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter > 
        <Navibar />
        <Home />
        {/* <Route exact path='/' component = {SignUp} /> */}
       
    </BrowserRouter>
  );
}

export default App;

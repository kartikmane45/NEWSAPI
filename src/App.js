import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div> 
        <Router> 
        <Navbar/> 
        
        <Routes> 
                  
          <Route end path="/Home"  element={<  News key="business" pageSize={5} country="in" category="business"  />}          />  
          <Route end path="/entertainment"  element={< News key="entertainment" pageSize={5} country="in" category="entertainment" />}  />  
          <Route end path="/general"  element={< News key="general" pageSize={5} country="in" category="general"/>}             />  
          <Route end path="/health" element={<   News key="health" pageSize={5} country="in" category="health" />}              />  
          <Route end path="/science " element={< News key="science" pageSize={5} country="in" category="science"  />}             />  
          <Route end path="/sports " element={<    News key="sports" pageSize={5} country="in" category="sports" />}            />  
          <Route end path="/technology"  element={< News key="technology" pageSize={5} country="in" category="technology" />}       />   
          
        </Routes>
        </Router> 
      </div>
    )
  }
}
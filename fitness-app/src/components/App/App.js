import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import NavBar from '../NavBar/NavBar';
import Hero from "../Hero/Hero"
import Activity from '../Activity/Activity';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = "/" element={<Hero/>}/>
          <Route path="/activity" element={<Activity/>}></Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

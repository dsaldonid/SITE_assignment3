import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import NavBar from '../NavBar/NavBar';
import Hero from "../Hero/Hero"
import Activity from '../Activity/Activity';
import Login from '../Login/Login';
import Exercise from '../Exercise/Exercise';
import Nutrition from '../Nutrition/Nutrition';
import Sleep from '../Sleep/Sleep';
import SignUp from '../SignUp/SignUp';
import InvalidLogin from '../InvalidLogin/InvalidLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = "/" element={<Hero/>}/>
          <Route path="/activity" element={<Activity/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/exercise" element={<Exercise/>}/>
          <Route path="/nutrition" element={<Nutrition/>}/>
          <Route path="/sleep" element={<Sleep/>}/>
          <Route path="/invalidlogin" element={<InvalidLogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

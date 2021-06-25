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
  const [user, setUser] = useState({})
  console.log(Object.keys(user).length === 0);
 
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = "/" element={<Hero/>}/>
          <Route path=  "/activity" element={<Activity user={user}/>}></Route>
          <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/exercise" element={<Exercise user={user}/>}/>
          <Route path="/nutrition" element={<Nutrition user={user}/>}/>
          <Route path="/sleep" element={<Sleep user={user}/>}/>
          <Route path="/invalidlogin" element={<InvalidLogin user={user} setUser={setUser}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

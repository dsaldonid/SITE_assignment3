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
import ExerciseForm from "../ExerciseForm/ExerciseForm"

function App() {
  const [user, setUser] = useState({})

  const [appState, setApp] = useState({
    user: null,
    isAuthenticated: false,
    nutrition: [],
    sleep: [],
    exercise: [],
    token: ""
  })

 
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path = "/" element={<Hero/>}/>
          <Route path=  "/activity" element={<Activity user={user}/>}></Route>
          <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
          <Route path="/signup" element={<SignUp user={user} setUser={setUser}/>}/>
          <Route path="/exercise" element={<Exercise user={user}/>}/>
          <Route path="/nutrition" element={<Nutrition user={user}/>}/>
          <Route path="/sleep" element={<Sleep user={user}/>}/>
          <Route path="/invalidlogin" element={<InvalidLogin user={user} setUser={setUser}/>}/>
          <Route path="/exercise/form" element={<ExerciseForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

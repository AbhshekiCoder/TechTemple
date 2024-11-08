import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './Pages/Signup'
import './App.css'
import './CSS/common.css'


import Login from './Pages/Login'

import 'rsuite/dist/rsuite.min.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { Loader } from 'rsuite';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


// import Demo from './Components/demo'

function App() {
 
  return (
    <>
    
    <Routes>
      <Route path = "/Signin" element={<Login/>}></Route>
      <Route path = "/Signup" element = {<Signup/>}></Route>
      <Route path='/' element ={<Home/>}></Route>
    </Routes>
    <Footer/>
      
    
    
    </>
  )
}

export default App

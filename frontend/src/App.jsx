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
import axios from 'axios';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoutes';
import Dashboard from './Pages/Dashboard';
import { ProfileProvider } from './profilecontext'
import CourseDetail from './Pages/CourseDetail'
import Sidebar from './Components/Sidebar'
import url from './misc/url'
import Singin from './Pages/Singin'
import StudentDashboard from './Pages/StudentDashboard'
import Quiz from './Pages/Quiz'



// import Demo from './Components/demo'

function App() {
  let [username, setUserName] = useState();
  let [profile, setProfile] = useState(false);
  let [num, setNum] = useState(1);

let data = async()=>{
  let token = localStorage.getItem('token');
if(token){
 let result1 = await axios.post(`${url}user_detail`, {token});
let data = result1.data.name.split(' ');
setUserName(data[0])
console.log(data[0])
setProfile(true);

}
else{
  setProfile(false)
}
}








  let sidebar_open =async()=>{
    let token = localStorage.getItem('token');
    setNum(num + 1);
    if(token){
      let result1 = await axios.post(`${url}user_detail`, {token});
     let data = result1.data.name.split(' ');
     setUserName(data[0])
     console.log(data[0])
     setProfile(true);
     
     }
     else{
      setProfile(false)
     }
   
    console.log('click')
    
  }
  function logout(){
    console.log("hello")
    localStorage.removeItem("token");

	
	setProfile(false);

	



  }
  useEffect(()=>{
    data()

  },[])
  useEffect(()=>{
    if(num % 2 == 0){
      document.querySelector('.sidebar').style.display = "block"; 
      console.log(num)
     

    }
    else{
      console.log(num)
      document.querySelector('.sidebar').style.display = "none"; 
    }

  },[num])

  return (
    <>
    <Sidebar username={username} profile={profile} logout={logout} />
  <ProfileProvider>
  <Routes>
    <Route element = {<PrivateRoute/>}>
    <Route path = "/Dashboard" element={<Dashboard/>}></Route>

    </Route>
     <Route element = {<PublicRoute/>}>
     <Route path = "/login" element={<Login/>}></Route>
      <Route path = "/Signup" element = {<Signup/>}></Route>
      <Route path='/' element ={<Home  sidebar_open={sidebar_open} profile={profile} logout={logout}/>}></Route>
      <Route path='/CourseDetail' element ={<CourseDetail />}></Route>
      <Route path='/signin' element ={<Singin/>}></Route>
      <Route path='/StudentDashboard' element ={<StudentDashboard/>}></Route>
      <Route path='/quiz' element ={<Quiz/>}></Route>
   
   
     </Route>
    </Routes>
    <Footer/>
    
 

  </ProfileProvider>
   
      

   
      
    
    
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import SignUp from './pages/SignUp'
import {Routes,Route} from "react-router-dom"
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
function App() {
  return (
    <  >  
    
    <Routes >
    
    <Route path="/" element={<SignIn/>}></Route>
    <Route path="/signUp" element={<SignUp/>}></Route>
    <Route path="*"  
     element={
  <div> <Navbar/>
  <Routes>
<Route path="/Home" element={<Home/>}></Route>
</Routes>
</div>
}
    > 
    
    
    </Route>
       
  </Routes></>
    
  )
}

export default App

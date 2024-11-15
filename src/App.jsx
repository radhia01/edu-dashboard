

import './App.css'


import Dashboard from "./containers/Dashboard"
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Professors from "./containers/Professor/Professors"
import AddEditProfessor from "./containers/Professor/AddEditProfessor"
import AddEditStudent from "./containers/students/AddEditStudent"
import Students from "./containers/students/Students"
import { useState } from 'react'
import CoursesList from './containers/Courses/CoursesList'
import AddEditCourse from './containers/Courses/AddEditCourse'
import CourseDetails from './containers/Courses/CourseDetails'
import TopStudents from './containers/students/TopStudents'
import Certificates from './containers/certificate/Certificates'
import AddEditCertificate from './containers/certificate/AddEditCertificate'
import Login from './containers/Login'
import MyCalendar from './containers/MyCalendar'

function App() {
  const [userId, setuserId] = useState(null)
  const [courseId, setCourseId] = useState(null)
  const [minimize, setMinimize] = useState(false)
  const [certifId, setCertifId] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  return (
    <div className="flex w-screen  h-screen overflow-hidden ">
      {
      authenticated ?  <>
        <Sidebar  minimize={minimize} setMinimize={setMinimize} setAuthenticated={setAuthenticated} />
    <div className={ `${minimize? "ml-20":"ml-60"} flex-grow overflow-y-auto h-screen`}>
      <Navbar minimize={minimize} setMinimize={setMinimize} />
      <div className="p-4 w-full  bg-gray-200">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/professors" element={<Professors  setuserId={setuserId} />} />
          <Route path="/courses" element={<CoursesList   setCourseId={setCourseId} />} />
          <Route path="/add/professor"  element={<AddEditProfessor />} />
          <Route path="/edit/professor"  element={<AddEditProfessor  setuserId={setuserId} userId={userId}/>} />
          <Route path="/students"   element={<Students  setuserId={setuserId} />} />
          <Route path="/add/student"  element={<AddEditStudent  />} />
          <Route path="/edit/student"  element={<AddEditStudent  setuserId={setuserId} userId={userId}/>} />
          <Route path="/add/course"  element={<AddEditCourse   courseId={courseId}/>} />
          <Route path="/edit/course"  element={<AddEditCourse   courseId={courseId}/>} />
          <Route path="course/details"  element={<CourseDetails />} />
          <Route path="top/students"  element={<TopStudents />} />
          <Route path="/certificates"  element={<Certificates setCertifId={setCertifId} />} />
          <Route path="/add/certificate"  element={<AddEditCertificate  certifId={certifId} setCertifId={setCertifId}  />}/>
          <Route path="/edit/certificate"  element={<AddEditCertificate  certifId={certifId} setCertifId={setCertifId}  />}/>
          <Route path="/calendar"  element={<MyCalendar    />}/>
        
         
        </Routes>
      </div>
    </div></>:<Routes>  <Route path="/"  element={<Login setAuthenticated={setAuthenticated} />}/></Routes>}
   
  </div>
      
    
       
 
    
  )
}

export default App

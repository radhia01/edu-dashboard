import React from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import StudentForm from './StudentForm';

const DateModel=({closeModal,setDate,date,setbirthDate,isBirthDate,birthDate})=>{
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                  X
        </button>
                
        <Calendar onChange={(date) => { isBirthDate ? setbirthDate(date) :setDate(date); closeModal(); }} value={isBirthDate?birthDate:date}/>
      </div>
    </div>

  )
}
function AddEditStudent({userId}) {
  const navigate=useNavigate()
    const [isOpen, setisOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    const [birthDate, setbirthDate] = useState(new Date("1990/01/02"))
    const openModal=()=>setisOpen(true)
    const closeModal=()=>setisOpen(false)
    const [isBirthDate, setisBirthDate] = useState(false)
    const [isDate, setisDate] = useState(false)
    const coursesList=[
      {id:1,
        name:"Introduction à la Programmation avec Python",
       
      },
      {id:2,
        name:"Développement Web Frontend avec React",
       
      },
      {id:3,
        name:"JavaScript : De Débutant à Expert",
        
      },
      {id:4,
        name:"Développement Backend avec Node.js et Express",
       
      }
    
    
    ]
  return (
    <div  className='  relative py-7  px-6   min-h-screen  p-6   '>
      <div className=" shadow py-4  px-3  bg-white font-bold  flex  items-center justify-between text-red-800 ">
        <h1>{userId? "Edit Student":"Add New Student"} </h1>
        <div className='flex  gap-2'>
          <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/")}>Dashboard</button>
          <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/Students")}>Students</button>
        </div>
      </div>
      <div className="  mt-4 border rounded-sm    w-full  h-auto   shadow  ">
        <div className=" text-gray-900 flex  py-4  px-2 ">
          <h1>Basic info</h1>
        </div>
        <div>
          <StudentForm userId={userId} coursesList={coursesList} openModal={openModal} date={date} birthDate={birthDate} setisBirthDate={setisBirthDate} setisDate={setisDate}/>
        </div>
      </div>
      {isOpen && (
        <DateModel closeModal={closeModal} setDate={setDate} date={date} birthDate={birthDate} isBirthDate={isBirthDate} setbirthDate={setbirthDate}/>
          )}
    </div>
      )
    }

export default AddEditStudent
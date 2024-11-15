import React from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrainingForm from './TrainingForm';

const DateModel=({closeModal,setDate,date})=>{
 return (  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative">
    <button
      onClick={closeModal}
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
    >
      X
    </button>
    
    <Calendar
      onChange={(date) => {
        setDate(date);
        closeModal(); 
      }}
      value={date}
    />
  </div>
</div>

 )
}
function AddEditCourse({ trainingId}) {
    const [isOpen, setisOpen] = useState(false)
    const navigate=useNavigate()
    const [date, setDate] = useState(new Date())
    const openModal=()=>setisOpen(true)
    const closeModal=()=>setisOpen(false)
    const professors=[
      {id:1,
        name:"Amir Slimani"
      },
      {id:2,
        name:"Montassar Ben alia"
      },
      {id:3,
        name:" Eya Mokhtar"
      },
      {id:4,
        name:"Iheb Ben Ali"
      },
      {id:5,
        name:"Roukaya Ayari"
      },
      {id:6,
        name:"Houssem Ben Romdhane"
      },
      {id:7,
        name:"Hiba Krichen"
      }
    ]
      
    
  return (
    <div  className='  relative py-7  px-6   min-h-screen  p-6   '>
        
        <div className=" shadow py-4  px-3  bg-white font-bold  flex  items-center justify-between text-red-800 ">
            <h1>{trainingId? "Edit Training":"Add New Training"} </h1>
            <div className='flex  gap-2'>
              <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/")}>Dashboard</button>
              <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/trainings")}>Trainings</button>
              
              </div>
        </div>
<div className="  mt-4 border rounded-sm    w-full  h-auto   shadow  ">
    <div className=" text-gray-900 flex  py-4  px-2 ">

        <h1>Course Details</h1>
    </div>

  <div>
        <TrainingForm professors={professors}  trainingId={trainingId} date={date} openModal={openModal} />
  </div>
</div>
{isOpen && (
        <DateModel date={date} setDate={setDate} closeModal={closeModal}/>
      )}
    </div>)
}

export default AddEditCourse
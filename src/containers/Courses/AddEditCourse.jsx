import React from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddEditCourse({ courseId}) {
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
            <h1>{courseId? "Edit Course":"Add New Course"} </h1>
            <div className='flex  gap-2'>
              <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/")}>Dashboard</button>
              <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/courses")}>Courses</button>
              
              </div>
        </div>
<div className="  mt-4 border rounded-sm    w-full  h-auto   shadow  ">
    <div className=" text-gray-900 flex  py-4  px-2 ">

        <h1>Course Details</h1>
    </div>

  <div>
     <form className='grid grid-cols-2 gap-6 px-2  py-2 '>
     <div >
            <label className="block mb-2 text-sm font-medium text-gray-900 "> Course Name</label>
            <input type="text"  value={courseId?"Python":null} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Course Code </label>
            <input type="text"  value={courseId?"Pro#005":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
        </div>
        <div className='col-span-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900  ">Course Details</label>
            <textarea rows="5"  value={courseId?"Python Essentials":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-full "    required />
        </div>
        
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Course Duration </label>
            <input type="text"  value={courseId?"6 Months ":null}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Start Day </label>
            <input type="text"       
            value={date.toLocaleDateString()}  onClick={openModal} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
             required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Professor  </label>
            <select id="countries"  value={courseId?2:1}className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5   ">
                    <option selected>Choose a Professor</option>
                    {professors.map(professor=>(
                         <option key="" value={professor.id}>{professor.name}</option>
                    ))}
                   
    
            </select>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Max Students</label>
            <input type="text" value={courseId?"200":null}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
             required />
        </div>
       
      
        
       
       
        
        <div className="flex ">
        <button className='bg-red-800 text-white py-2  px-3  mr-5'>Submit</button>
        <button className='bg-red-800 text-white py-2  px-3 '>Cancel</button>
            
        </div>
      
           
        
     </form>
  </div>
</div>
{isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
                closeModal(); // Ferme la modal après sélection
              }}
              value={date}
            />
          </div>
        </div>
      )}
    </div>)
}

export default AddEditCourse
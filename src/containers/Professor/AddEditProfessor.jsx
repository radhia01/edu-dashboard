import React from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
function AddEditProfessor({userId,setuserId}) {
    const [isOpen, setisOpen] = useState(false)
    const navigate=useNavigate()
    const [date, setDate] = useState(new Date())
    const [birthDate, setbirthDate] = useState(new Date("1990/01/02"))
    const openModal=()=>setisOpen(true)
    const closeModal=()=>setisOpen(false)
    const specialities=[
      {id:1,
        name:"programmation"
      },
      {id:2,
        name:"Développement web "
      },
      {id:2,
        name:"CyberSecurité"
      }
    ]
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
            <h1>{userId? "Edit Professor":"Add New Professor"} </h1>
            <div className='flex  gap-2'>
                  <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/")}>Dashboard</button>
                  <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/professors")}>Professors</button>
            </div>
        </div>
        <div className="  mt-4 border rounded-sm    w-full  h-auto   shadow  ">
            <div className=" text-gray-900 flex  py-4  px-2 ">
           <h1>Basic info</h1>
        </div>

        <div>
           <form className='grid grid-cols-2 gap-6 px-2  py-2 '>
              <div >
                <label className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                <input type="text"  value={userId?"Emma":null} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                  <input type="text"  value={userId?"Parker":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                  <input type="email"  value={userId?"exmple@gmail.com":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Mobile</label>
                  <input type="text"  value={userId?"02020202":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Gender</label>
                <select id="countries"  value={userId?"female":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5   ">
                        <option selected>Choose a Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
        
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Adrdess</label>
                <input type="text" value={userId?"Tunis":null}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">CIN</label>
            <input type="text" value={userId?"0000000":null}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
            <input type="password"  value={userId?"0101010":null}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Joining Date</label>
            <input type="text"       
            value={date.toLocaleDateString()}  onClick={openModal} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
        </div>
      
        
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">BirthDate</label>
            <input type="text"       
            value={birthDate.toLocaleDateString()}  onClick={openModal} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="John" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Speciality</label>
            <select id="specialities" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5   ">
                    <option selected>Choose a Speciality</option>
                    {specialities.map(speciality=>(
                         <option key={speciality.id} value={speciality.id}>{speciality.name}</option>
                    ))}
                   
    
            </select>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Courses List</label>
            <select id="courses" multiple className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5   ">
                    <option selected>Choose one or multiple courses</option>
                    {coursesList.map(course=>(
                         <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                   
    
            </select>
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
    </div>
  )
}

export default AddEditProfessor
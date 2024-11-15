import React from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddCertificate({ certifId}) {
    const [isOpen, setisOpen] = useState(false)
    const navigate=useNavigate()
    const [date, setDate] = useState(new Date())
    const openModal=()=>setisOpen(true)
    const closeModal=()=>setisOpen(false)
    const studentsList=[
        {
          id:1,
          FirstName:"Marwen ",
          LastName:"Attia",
          Gender:"Male",
          Email:"example01@gmail.com",
          Mobile:"012345678",
          JoiningDate:"01/02/2020",
          
    
        },
        {
          id:2,
          FirstName:"Ahlem ",
          LastName:"Suissi",
          Gender:"Female",
          Email:"example03@gmail.com",
          Mobile:"012345678",
          JoiningDate:"12/10/2023",
         
    
        },
        {
          id:3,
          FirstName:"Mouna ",
          LastName:"Henchir",
          Gender:"Female",
          Email:"example04@gmail.com",
          Mobile:"12345678",
          JoiningDate:"04/04/2024",
         
    
        },
        {
          id:4,
          FirstName:"Ali ",
          LastName:"Ben Youssef",
          Gender:"Male",
          Email:"example01@gmail.com",
          Mobile:"12345678",
          JoiningDate:"01/02/2021",
        
          
    
        },
        {
          id:5,
          FirstName:"Aymen ",
          LastName:"Omrani",
          Gender:"Male",
          Email:"example1@gmail.com",
          Mobile:"012345678",
          JoiningDate:"12/06/2021",
        
          
    
        },
        {
          id:6,
          FirstName:"Rawdha ",
          LastName:"Hemdani",
          Gender:"Female",
          Email:"example01@gmail.com",
          Mobile:"012345678",
          JoiningDate:"12/10/2022",
         
    
        },
        {
          id:7,
          FirstName:"Arafat ",
          LastName:"Rahmouni",
          Gender:"Male",
          Email:"example02i@gmail.com",
          Mobile:"012345678",
          JoiningDate:"17/05/2021",
        
    
        },
        {
          id:7,
          FirstName:"Nahed ",
          LastName:"Omrane",
          Gender:"Female",
          Email:"example02i@gmail.com",
          Mobile:"012345678",
          JoiningDate:"17/05/20224",
          
    
        },
      ]
      
      const coursesList=[
        {  id:1,
          name:"Introduction à la Programmation avec Python",
          duration:"6 Months",
          professor:"Amna ben Ali",
          students:+100,
          startOn:"12/12/2024",
          price:"$ 1500",
          
        },
        {id:2,
          name:"Développement Web Frontend avec React",
          duration:"12 Months",
          professor:"Riad Hamrouni",
          students:+120,
          startOn:"12/12/2024",
          price:"$ 1500",
         
        },
        {id:3,
          name:"JavaScript : De Débutant à Expert",
          duration:"12 Months",
          professor:"Sihem Soltani",
          students:+60,
          startOn:"12/12/2024",
          price:"$ 1500",
       
        },
        {id:4,
          name:"Développement Backend avec Node.js et Express",
          duration:"7 Months",
          professor:"",
          students:+200,
          startOn:"12/12/2024",
          price:"$ 1500",
        
        }
      
      ]
      const professorsList=[
        {
          id:1,
          FirstName:"Amir ",
          LastName:"Slimani",
          Gender:"Male",
          Email:"example4@gmail.com",
          Mobile:"12345678",
          JoiningDate:"01/02/2021",
        
    
        },
        {
          id:2,
          FirstName:"Montassar ",
          LastName:"Ben alia",
          Gender:"Male",
          Email:"exemple3@gmail.com",
          Mobile:"012345678",
          JoiningDate:"12/10/2023",
        
    
        },
        {
          id:3,
          FirstName:"Eya ",
          LastName:"Mokhtar",
          Gender:"Female",
          Email:"exemple1@gmail.com",
          Mobile:"012345678",
          JoiningDate:"04/04/2024",
      
        },
        {
          id:4,
          FirstName:"Iheb ",
          LastName:"Ben Ali",
          Gender:"Male",
          Email:"exemple2@gmail.com",
          Mobile:"012345678",
          JoiningDate:"10/12/2019",
        
    
        },
        {
          id:5,
          FirstName:"Roukaya ",
          LastName:"Ayari",
          Gender:"Male",
          Email:"exemple01@gmail.com",
          Mobile:"012345678",
          JoiningDate:"14/08/2020",
      
        },
        {
          id:6,
          FirstName:"Houssem ",
          LastName:"Ben Romdhane",
          Gender:"Male",
          Email:"example02@gmail.com",
          Mobile:"012345678",
          JoiningDate:"01/02/2021",
        
    
        },
        {
          id:7,
          FirstName:"Hiba ",
          LastName:"Krichen",
          Gender:"Male",
          Email:"example03@gmail.com",
          Mobile:"12345678",
          JoiningDate:"07/03/2022",
      
        },
      ]
      
      
  return (
    <div  className='  relative py-7  px-6   min-h-screen  p-6   '>
        
      <div className=" shadow py-4  px-3  bg-white font-bold  flex  items-center justify-between text-red-800 ">
        <h1>{certifId ? " Certificate Details " :"Add New Certificate"}</h1>
        <div className='flex  gap-2'>
           <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/")}>Dashboard</button>
          <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/certificates")}>Certificates</button>
              
        </div>
        </div>
        <div className="  mt-4 border rounded-sm    w-full  h-auto   bg-white  shadow  ">
            <div className=" text-gray-900 flex  py-4  px-2 ">
            <h1>Certificate Details</h1>
            </div>

        <div>
          <form className='grid grid-cols-2 gap-6 px-2  py-2 '>
            <div >
                  <label className="block mb-2 text-sm font-medium text-gray-900 "> Certificate Name </label>
                  <input type="text"  value={certifId?"Certificate":null} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Student </label>
                <select value={certifId?2:null}  className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5">
                  <option>Choose a student</option>
                  {studentsList.map(student=>{
                      return <option key={student.id} value={student.id}>{student.FirstName}{student.LastName}</option>
                      })}
                </select>
            </div>
        
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Certificate Number  </label>
                <input type="text"  value={certifId?"000000 ":null}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Issued  On   </label>
                <input type="text"       
                value={date.toLocaleDateString()}  onClick={openModal} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Course </label>
                <select  value={certifId?2:null}className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5">
                  <option>Choose a course</option>
                  {coursesList.map(course=>{
                      return <option key={course.id} value={course.id}>{course.name}</option>
                  })}
                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Professor   </label>
                <select id="professors"   value={certifId?2:null} className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5   ">
                      
                        {professorsList.map(professor=>(
                            <option key={professor.id} value={professor.id}>{professor.FirstName}{professor.LastName}</option>
                        ))}
                      
        
                </select>
            </div>
            <div className="flex ">
              <button className='bg-red-800 text-sm text-white py-1 px-3  mr-5'>Update</button>
              <button className='bg-red-800 text-sm text-white py-1  px-3 '>Cancel</button>
            
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
                closeModal(); 
              }}
              value={date}
            />
          </div>
        </div>
      )}
    </div>)
}

export default AddCertificate
import React from 'react'
import TrainingCard from '../../components/Card/TrainingCard'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';
import TrainingDetails from './TrainingDetails';
import image1 from "../../assets/course1.jpg" 
import image2 from "../../assets/course2.jpg" 
import image3 from "../../assets/course3.jpg"
import image4 from "../../assets/course4.jpg"
function TrainingsList({setTrainingId}) {
    const navigate=useNavigate()
    const [showCourseDetails, setShowCourseDetails] = useState(false)
    const [course, setCourse] = useState()
    const trainingsList=[
        {id:1,
          name:"Introduction à la Programmation avec Python",
          duration:"6 Months",
          professor:"Amna ben Ali",
          students:+100,
          startOn:"12/12/2024",
          price:"$ 1500",
          image:image4
        },
        {id:2,
          name:"Développement Web Frontend avec React",
          duration:"12 Months",
          professor:"Riad Hamrouni",
          students:+120,
          startOn:"12/12/2024",
          price:"$ 1500",
          image:image2
        },
        {id:3,
          name:"JavaScript : De Débutant à Expert",
          duration:"12 Months",
          professor:"Sihem Soltani",
          students:+60,
          startOn:"12/12/2024",
          price:"$ 1500",
          image:image3
        },
        {id:4,
          name:"Développement Backend avec Node.js et Express",
          duration:"7 Months",
          professor:"",
          students:+200,
          startOn:"12/12/2024",
          price:"$ 1500",
          image:image1
        }
      
      ]
      
  return (
    <div className='min-h-screen py-4  px-2  mx-auto  '>
      <div className=" flex p-4 relative bg-white shadow ">
        <h1 className='text-2xl text-red-800  font-bold '>Trainings List </h1>
          <button className='bg-red-500 text-white  top-2 flex  font-medium absolute right-2 py-3 px-2 focus:outline-none border-none ' onClick={()=>{setTrainingId(null),navigate("/add/training")}}> <AiOutlinePlus className='mt-1  mr-1 text-lg'/>Add new Training </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {trainingsList.map(course=>{
            return <TrainingCard key={course.id} data={course} setCourse={setCourse} setShowCourseDetails={setShowCourseDetails}/>
        })}
      
      </div>
        {showCourseDetails && <TrainingDetails course={course} setShowCourseDetails={setShowCourseDetails} setTrainingId={setTrainingId} />}

    </div>
  )
}

export default TrainingsList
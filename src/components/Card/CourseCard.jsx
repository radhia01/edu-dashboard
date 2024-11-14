import {React,useState} from 'react'
import { GiGraduateCap } from "react-icons/gi";

function CourseCard({data,setShowCourseDetails,setCourse}) {
    
  
    return (
        <div className=' relative shadow grid-rows-7 bg-white py-5 px-2   '>
        <div className=""><img src={data.image} className='w-[280px] h-[200px]'/></div>
        <di><h1 className='text-gray-600  text-xl font-medium  '>{data.name}</h1></di>
       <div className=" flex  py-4  justify-between text-gray-900 text-sm  font-mono"><h1>Duration </h1>
       <h1 className='font-bold'>{data.duration}</h1>
       </div> 
       <hr></hr>
       <div className=" flex  py-4 justify-between text-gray-900 text-sm  font-mono"><h1>Professor </h1>
       <h1>{data.professor}</h1>
       </div> 
       <hr></hr>
       <div className=" flex py-4  justify-between text-gray-900 text-sm   font-mono">
        <div className="flex py-2"><GiGraduateCap className='mt-1 mr-1 text-red-800'/><h1>Students  </h1> </div>
       <h1 className='font-bold'> {data.students}</h1>
       </div> 
         <div className="flex absolute  bottom-2 left-[10%] "><button className='bg-gray-600 p-1  text-sm' onClick={()=>{setShowCourseDetails(true),
          setCourse(data)
         }}>Read More</button></div>
        
      </div>
      ) 
}

export default CourseCard
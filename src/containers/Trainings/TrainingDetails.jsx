import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteTraining from './DeleteTraining'
function CourseDetails({course,setShowCourseDetails,setTrainingId}) {
    const navigate=useNavigate()
    const [deleteCourse, setDeleteCourse] = useState(false)
  return (
    <div className='fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50 '>
        <div className="flex flex-col w-2/3 bg-gray-200 ">
                <div className=" shadow py-4  px-3  bg-white font-bold    flex  items-center justify-between text-red-800 ">
                        <h1>Training Details </h1>
                        <div className='flex  gap-2'>
                            <button className='bg-white focus:outline-none border-none' onClick={()=>navigate("/dashboard")}>Dashboard</button>
                            <button className='bg-white focus:outline-none border-none' onClick={()=>setShowCourseDetails(false)}>Trainings</button>
                
                       </div>
                </div>
               <div className="grid grid-cols-5  gap-4 mt-5 p-2">
                       <div className="col-span-2  grid grid-rows-3 bg-white ">
                            <div className="row-span-3 flex justify-center"><img  className=" h-80    w-96"src={course.image}/></div>
                            <div className="row-span-1 p-2"><h1 className='text-gray-700 font-bold text-2xl '>{course.name}</h1></div>
                        </div>
                <div className="col-span-3 p-4 bg-white ">
                     <div className=""> <h1 className='text-gray-800 font-medium text-2xl'>About Training</h1>
                          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque illum, asperiores, nulla culpa quaerat molestiae distinctio fuga minus voluptas dolore porro voluptates, tenetur nihil velit quos. Asperiores commodi impedit exercitationem harum eos? Similique et magni ut, quis optio atque culpa.</p>
                     </div> 
                     <div className="pt-4 grid grid-cols-3 gap-4 ">
                        <div className="">
                                <h1 className='text-gray-700 font-bold'>Total Students</h1>
                                <h1 className='text-red-800 font-bold'>{course.students}</h1>
                        </div>
                        <div className="">
                                <h1 className='text-gray-700 font-bold'>Professor</h1>
                                <h1 className='text-red-800 font-bold'>{course.professor}</h1>
                        </div>
                        <div className="">
                                <h1 className='text-gray-700 font-bold'>Start Day </h1>
                                <h1 className='text-red-800 font-bold'>{course.startOn}</h1>
                        </div>
                        <div className="">
                                <h1 className='text-gray-700 font-bold'>Duration </h1>
                                <h1 className='text-red-800 font-bold'>{course.duration}</h1>
                        </div>
                        <div className="">
                                <h1 className='text-gray-700 font-bold'>Price </h1>
                                <h1 className='text-red-800 font-bold'>{course.price}</h1>
                        </div>
                       
                </div>
                <div className=" mt-4 py-4 "><button className='bg-red-700 mr-4 p-2 border-none  text-sm focus:outline-none' onClick={()=>setDeleteCourse(true)}>Delete Training</button>
                        <button className='bg-gray-300 text-gray-800 p-2  border-none text-sm  focus:outline-none' onClick={()=>{ setTrainingId(course.id), navigate("/edit/training")}}>Edit Training</button></div>
                    </div>
                   
               </div>
        </div>
        {deleteCourse && <DeleteTraining setDeleteCourse={setDeleteCourse}/>}
    </div>


  )
}

export default CourseDetails
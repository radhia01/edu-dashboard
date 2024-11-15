import React from 'react'

function DeleteCourse({setDeleteCourse}) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center'>
        <div className="bg-white w-1/3 shadow rounded-lg flex flex-col py-8 ">
          <div className=" flex py-4  justify-center ">
            <h1 className='text-gray-800 text-lg '>Do you want to delete this training? </h1>
          </div>
          <div className="flex justify-center gap-4">
            <button className='bg-green-900 py-3 px-8 rounded text-sm  '>Yes</button>
            <button className='bg-red-900 py-3 px-8 rounded text-sm ' onClick={()=>setDeleteCourse(false)}>No</button>
            
          </div>
        
        </div>
    </div>
  )
}

export default DeleteCourse
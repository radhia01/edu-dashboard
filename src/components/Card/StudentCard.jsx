import React from 'react'

function StudentCard({user}) {
    return (
        <div className={`w-full  rounded-sm shadow grid   grid-rows-7  m-2 py-2 px-2   ${user.top===1 ? "bg-red-100":"bg-white"} ` }>
    <div className="row-span-3 flex flex-col justify-center items-center text-gray-800 p-1">
      <div className=" "> <img className='rounded-full  h-[100px] w-[100px] border' src={user.image}/></div>  
      <div className={` text-centermt-1 text-gray-800 ${user.top===1?"text-3xl":" text-xl "}`}>  <h1 >{user.FirstName} {user.LastName}</h1></div>
    
    </div>
    <div className={ user.top === 1 ? "py-3 row-span-4 flex flex-col text-red-800" : "py-3 row-span-4 flex flex-col text-gray-800" }>
         <div className=" flex justify-between py-2 ">
          <h1>Top:</h1>
         <h1 className='font-bold'>{user.top}</h1>
        
         </div>
         <hr className='text-gray-500 mt-2'></hr>
         <div className=" flex justify-between py-2">
          <h1>Score:</h1>
         <h1 className='font-bold'>{user.score}</h1>
        
         </div>
         <hr className='text-gray-500 mt-2'></hr>
         <div className=" flex justify-between py-2">
          <h1>Email:</h1>
         <h1 className='font-bold'>{user.Email}</h1>
        
         </div>
         <hr className='text-gray-500 mt-2'></hr>
         <div className=" flex justify-between py-2">
          <h1>Course: </h1>
         <h1 className='font-bold ml-1'>{user.course}</h1>
        
         </div>
    </div>
    
   
        </div>)
}

export default StudentCard
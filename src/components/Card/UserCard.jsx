import React from 'react'

function UserCard({user}) {
    return (
      <div className="w-full rounded-sm shadow grid   grid-rows-7  m-2 py-2 px-2  bg-white   ">
          <div className="row-span-3 flex flex-col justify-center items-center text-gray-800 p-1">
              <div className=""> <img className='rounded-full h-[100px] w-[100px]' src={user.image}/>
              </div>  
              <div className=" text-center text-xl mt-1 text-gray-800">  <h1 >{user.FirstName} {user.LastName}</h1>
              </div>
          </div>
          <div className=" py-3 row-span-3 flex flex-col text-gray-800 ">
              <div className=" flex justify-between py-2 ">
                  <h1>Gender:</h1>
                  <h1 className='font-bold'>{user.Gender}</h1>
              </div>
              <hr className='text-gray-500 mt-2'></hr>
              <div className=" flex justify-between py-2">
                  <h1>Mobile:</h1>
                  <h1 className='font-bold'>{user.Mobile}</h1>
              </div>
              <hr className='text-gray-500 mt-2'></hr>
              <div className=" flex justify-between py-2">
                  <h1>Email:</h1>
                  <h1 className='font-bold'>{user.Email}</h1>
              </div>
              <hr className='text-gray-500 mt-2'></hr>
          </div>
          <div className="row-span-1  flex justify-center">
                  <button className='rounded-full w-full  bg-gray-600'>Read More</button>
          </div>
      </div>
        
      )
}

export default UserCard
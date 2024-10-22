import React from 'react'

function Navbar() {
  return (
    <div><nav className=' bg-gray-800 flex fixed top-0 mb-4  h-auto  w-screen'>
             <div className="flex ">
                <a  href=""className=' rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white  hover:text-white'>Home</a>
                <a  href="" className='rounded-md  px-3 py-2 text-sm font-medium text-white  hover:text-white hover:bg-gray-700'>About us </a>
                <a   href=""className='rounded-md  px-3 py-2 text-sm font-medium text-white  hover:text-white   hover:bg-gray-700'>Events </a>
               
             </div>
             <div className="flex flex-1 justify-end">
             <a  href=""className='rounded-md  px-3 py-2 text-sm font-medium text-white   hover:text-white  hover:bg-gray-700'>Contact </a>
             </div>
        </nav></div>
  )
}

export default Navbar
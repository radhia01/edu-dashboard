import React from 'react';
import { AiOutlineDropbox } from "react-icons/ai";
import { MdOutlineMenuOpen } from "react-icons/md";
function Navbar({setMinimize,minimize}) {
  return (
    <div className="w-full h-20 bg-gray-600 text-white p-3 flex ">
      <button   className='mr-2 mt-1 border-none w-12 flex  justify-center items-center  focus:outline-none'onClick={()=>setMinimize(!minimize)}><MdOutlineMenuOpen className='text-4xl '/></button>
      <input  type="text" className='rounded-lg h-12  bg-gray-300   p-2 ' placeholder='Search ...'/>
    </div>
  );
}

export default Navbar;

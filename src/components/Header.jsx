import React from 'react'
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineContainer } from "react-icons/ai";
  const CardItem=({title,number,icon,color})=>{
    return  <div className={`w-[300px] rounded-sm py-4 px-3  h-[150px]   ${color}  grid grid-cols-3   items-center `}>
    <div className="text-4xl   flex justify-center  ">{icon} </div>
    <div className="    col-span-2  flex  flex-col ">
      <h1 className='uppercase fon-bold '>{title}</h1><h1 className='text-3xl font-bold '>{number}</h1></div>
   </div>
    

  }
function Header() {
  return (
    <div className=' p-2 flex  gap-4 justify-center z-20   pb-20  w-full   flex-wrap mx-auto '>
   
    <CardItem  title={"Total Students"} number={500} icon={<AiOutlineUsergroupDelete/>} color={"bg-red-400"}/>
    <CardItem  title={"New  Students"} number={200} icon={<AiOutlineUser/>} color={"bg-blue-800"}/>
    <CardItem  title={"Total Courses"} number={200} icon={<AiOutlineContainer/>} color={"bg-yellow-300"}/>
    <CardItem  title={"Total Professors"} number={100} icon={<AiOutlineUsergroupDelete/>} color={"bg-gray-400"}/>
   
    </div>
  )
}

export default Header
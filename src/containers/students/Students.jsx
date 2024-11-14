import React from 'react'
import { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import user1 from "../../assets/usermen.png"
import user2 from "../../assets/userwomen.png"
import user3 from "../../assets/user3.avif"
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import UserCard from '../../components/Card/UserCard';
import Table from '../../components/Table/Table';
import DeleteModal from '../../components/DeleteModal';
function Students({setuserId}) {
  const [listView, setlistView] = useState(true)
const [deleteUser, setdeleteUser] = useState(false)
const [item, setitem] = useState("")
const navigate=useNavigate()
  const usersList=[
    {
      id:1,
      FirstName:"Marwen ",
      LastName:"Attia",
      Gender:"Male",
      Email:"example01@gmail.com",
      Mobile:"012345678",
      JoiningDate:"01/02/2020",
      image:user1

    },
    {
      id:2,
      FirstName:"Ahlem ",
      LastName:"Suissi",
      Gender:"Female",
      Email:"example03@gmail.com",
      Mobile:"012345678",
      JoiningDate:"12/10/2023",
      image:user2

    },
    {
      id:3,
      FirstName:"Mouna ",
      LastName:"Henchir",
      Gender:"Female",
      Email:"example04@gmail.com",
      Mobile:"12345678",
      JoiningDate:"04/04/2024",
      image:user2

    },
    {
      id:4,
      FirstName:"Ali ",
      LastName:"Ben Youssef",
      Gender:"Male",
      Email:"example01@gmail.com",
      Mobile:"12345678",
      JoiningDate:"01/02/2021",
      image:user1

    },
    {
      id:5,
      FirstName:"Aymen ",
      LastName:"Omrani",
      Gender:"Male",
      Email:"example1@gmail.com",
      Mobile:"012345678",
      JoiningDate:"12/06/2021",
      image:user1

    },
    {
      id:6,
      FirstName:"Rawdha ",
      LastName:"Hemdani",
      Gender:"Female",
      Email:"example01@gmail.com",
      Mobile:"012345678",
      JoiningDate:"12/10/2022",
      image:user2

    },
    {
      id:7,
      FirstName:"Arafat ",
      LastName:"Rahmouni",
      Gender:"Male",
      Email:"example02i@gmail.com",
      Mobile:"012345678",
      JoiningDate:"17/05/2021",
      image:user1

    },
    {
      id:7,
      FirstName:"Nahed ",
      LastName:"Omrane",
      Gender:"Female",
      Email:"example02i@gmail.com",
      Mobile:"012345678",
      JoiningDate:"17/05/20224",
      image:user2

    },
  ]
  return (
    <div className="  min-h-screen  p-6  ">
         <div className='flex flex-col w-full rounded shadow bg-white  '>
              <div className=" flex py-3 px-4 relative "><h1 className='text-2xl text-red-800  font-bold '>Students List </h1>
                  <button className='bg-red-500 text-white  flex  font-medium absolute right-2 py-3 px-2 focus:outline-none border-none ' onClick={()=>navigate("/add/student")}> <AiOutlinePlus className='mt-1  mr-1 text-lg'/>Add new student </button>
              </div>
              <div className="flex gap-2 py-4  px-2">
                <button type="button " className='text-gray-700 hover:bg-red-600 p-2  border-white hover:border-white      focus:outline-none  hover:text-white' onClick={()=>{setlistView(true)}}>List View</button>
                <button className='text-gray-700 hover:bg-red-600 p-2 border-none  hover:text-white  focus:outline-none  ' onClick={()=>setlistView(false)}>Grid View</button>
              </div>
          </div>
   <div className="mt-5  mb-5    w-full flex flex-col  py-10  "
   >
    <div className="bg-white mb-2 flex  rounded-lg border w-1/4  "><CiSearch className=' text-2xl text-gray-300 mr-2 ml-1 mt-2'/><input type="text" onChange={e=>setitem(e.target.value)}  placeholder ="search...." className='  text-gray-900  p-2 bg-white rounded-sm  focus:border-none  h-10 '/></div>
    {listView &&  <Table usersList={usersList} setuserId={setuserId} setdeleteUser={setdeleteUser} item={item}/>}
<div className="grid grid-cols-3 gap-4 w-full ">{!listView && usersList.map(user => (
  <div key={user.id}>
    <UserCard user={user} />
  </div>
))}</div>

   </div>
    {deleteUser && <DeleteModal setdeleteUser={setdeleteUser} />}
<div className="h-10"></div>

    </div>
  )
}

export default Students
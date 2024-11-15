import React from 'react'
import { useState } from 'react'
import user1 from "../../assets/usermen.png"
import user2 from "../../assets/userwomen.png"
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import UserCard from '../../components/Card/UserCard';
import Table from '../../components/Table/Table';
import DeleteModal from '../../components/DeleteModal'

function Professors({setuserId}) {
  const [listView, setlistView] = useState(true)
const [deleteUser, setdeleteUser] = useState(false)
const [item, setItem] = useState("")
const navigate=useNavigate()
  const usersList=[
    {
      id:1,
      FirstName:"Amir ",
      LastName:"Slimani",
      Gender:"Male",
      Email:"example4@gmail.com",
      Mobile:"12345678",
      JoiningDate:"01/02/2021",
      image:user1

    },
    {
      id:2,
      FirstName:"Montassar ",
      LastName:"Ben alia",
      Gender:"Male",
      Email:"exemple3@gmail.com",
      Mobile:"012345678",
      JoiningDate:"12/10/2023",
      image:user1

    },
    {
      id:3,
      FirstName:"Eya ",
      LastName:"Mokhtar",
      Gender:"Female",
      Email:"exemple1@gmail.com",
      Mobile:"012345678",
      JoiningDate:"04/04/2024",
      image:user2

    },
    {
      id:4,
      FirstName:"Iheb ",
      LastName:"Ben Ali",
      Gender:"Male",
      Email:"exemple2@gmail.com",
      Mobile:"012345678",
      JoiningDate:"10/12/2019",
      image:user1

    },
    {
      id:5,
      FirstName:"Roukaya ",
      LastName:"Ayari",
      Gender:"Male",
      Email:"exemple01@gmail.com",
      Mobile:"012345678",
      JoiningDate:"14/08/2020",
      image:user2

    },
    {
      id:6,
      FirstName:"Houssem ",
      LastName:"Ben Romdhane",
      Gender:"Male",
      Email:"example02@gmail.com",
      Mobile:"012345678",
      JoiningDate:"01/02/2021",
      image:user1

    },
    {
      id:7,
      FirstName:"Hiba ",
      LastName:"Krichen",
      Gender:"Male",
      Email:"example03@gmail.com",
      Mobile:"12345678",
      JoiningDate:"07/03/2022",
      image:user2

    },
  ]
  
  return (
    <div className="  min-h-screen  p-6  ">
      <div className='flex flex-col w-full rounded shadow bg-white  '>
        <div className=" flex py-3 px-4 relative ">
          <h1 className='text-2xl text-red-800  font-bold '>Professors List </h1>
          <button className='bg-red-500 text-white  flex  font-medium absolute right-2 py-3 px-2 focus:outline-none border-none ' onClick={()=>navigate("/add/professor")}> <AiOutlinePlus className='mt-1  mr-1 text-lg'/>Add new Professor </button>
        </div>
        <div className="flex gap-2 py-4  px-2">
          <button type="button " className='text-gray-700 hover:bg-red-600 p-2  border-white hover:border-white      focus:outline-none  hover:text-white' onClick={()=>{setlistView(true)}}>List View</button>
          <button className='text-gray-700 hover:bg-red-600 p-2 border-none  hover:text-white  focus:outline-none  ' onClick={()=>setlistView(false)}>Grid View</button>
        </div>
      </div>
      <div className="mt-5  mb-5    w-full flex flex-col    justify-center  "> 
        <div className="bg-white mb-2 flex  rounded-lg border w-1/4  "><CiSearch className=' text-2xl text-gray-300 mr-2 ml-1 mt-2'/><input type="text" onChange={e=>setItem(e.target.value)}  placeholder ="search...." className='  text-gray-900  p-2 bg-white rounded-sm  focus:border-none  h-10 '/>
        </div>
    
         {listView &&  <Table usersList={usersList} setuserId={setuserId}  setdeleteUser={setdeleteUser} item={item}/>}
        <div className="grid grid-cols-3 gap-4 w-full ">{!listView && usersList.filter(user=>user.FirstName.toUpperCase().includes(item.toUpperCase())).map(user => (
          <div key={user.name}>
            <UserCard key={user.id} user={user} />
          </div>
                ))}
        </div>

      </div>
       {deleteUser && <DeleteModal setdeleteUser={setdeleteUser}/>}
      <div className="h-10">

      </div>

    </div>
  )
}

export default Professors
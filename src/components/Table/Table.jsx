import React from 'react'
import { AiFillEdit ,AiFillDelete} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
function Table({usersList,setuserId,setdeleteUser,item}) {
 
    const navigate=useNavigate()
  return (
    <div>
        <table className='items-center  shadow w-full bg-white  '>
    <thead>
        <tr>
        <th className=' w-64   px-6 py-3   text-sm text-gray-500 font-medium uppercase   text-start'>#image</th>
            <th className=' w-64  px-6 py-3  align-middle text-sm text-gray-500 font-medium uppercase   text-start'>FirstName</th>
            <th className='  px-6 py-3  text-gray-500  text-sm font-medium  uppercase  text-start'>LastName</th>
            <th className='  px-6 py-3  text-gray-500  text-sm font-medium  uppercase  text-start'>Gender</th>
            <th className='  px-6 py-3  text-gray-500  text-sm font-medium uppercase  text-start'>Email</th>
            
            <th className='  px-6 py-3  text-gray-500 text-sm  font-medium uppercase  text-start'>Mobile</th>
            
            <th className='  px-6 py-3   text-gray-500  text-sm font-medium uppercase  text-start'>Joining Date </th>
            <th className='  px-6 py-3   text-gray-500  text-sm font-medium uppercase  text-start'>Action </th>
            
            </tr>
    </thead>
    <tbody>
      
           
           {usersList.filter(user=>user.FirstName.toUpperCase().includes(item.toUpperCase())).map(user=>{
            return (  <tr key={user.id} className=''> 
               <td  className='   px-6 py-4  ' ><img  className="rounded-full  h-10 w-10"src={user.image}/></td>
              <td  className='text-gray-800 px-6 py-4 '>{user.FirstName}</td>
              <td  className='text-gray-800 px-6 py-4' >{user.LastName}</td>
              <td  className='text-gray-800 px-6 py-4' >{user.Gender}</td>
              <td  className='text-gray-800 px-6 py-4 ' >{user.Email}</td>
              <td  className='text-gray-800 px-6 py-4 ' >{user.Mobile}</td>
              <td  className='text-gray-800 px-6 py-4 ' >{user.JoiningDate}</td>
              <td className='text-gray-800 px-10 py-6  flex '  ><button className='   focus:outline-none border-none  text-xl ' data-modal-target="default-modal" data-modal-toggle="default-modal" onClick={()=>setdeleteUser(true)}><AiFillDelete className='text-red-800' /> </button> 
              <button className=' border-none  ml-2 text-xl'><AiFillEdit className='text-gray-400' onClick={()=>{setuserId(user.id);
                navigate("/edit/student")
              }}/></button></td>
              </tr>)
         
           })}
        
    </tbody>
   
</table>
    </div>
  )
}

export default Table
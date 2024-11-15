import React from 'react'
import { GrValidate } from "react-icons/gr";
import { MdOutlinePending } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function CertificateTable({certificates}) {
    const [item, setitem] = useState("")
 
    const navigate=useNavigate()
  return (
    <div>
        <table className='items-center  shadow w-full bg-white  '>
    <thead>
        <tr>
        <th className=' w-64   px-6 py-3   text-sm text-gray-500 font-medium uppercase   text-start'>certificate Num</th>
        <th className=' w-64   px-6 py-3   text-sm text-gray-500 font-medium uppercase   text-start'>Student</th>
        <th className='  px-6 py-3  text-gray-500  text-sm font-medium uppercase  text-start'>Email</th>
            <th className=' w-64  px-6 py-3  align-middle text-sm text-gray-500 font-medium uppercase   text-start'>Course</th>
            <th className='  px-6 py-3  text-gray-500  text-sm font-medium  uppercase  text-start'>DelivredOn</th>
            <th className='  px-6 py-3  text-gray-500  text-sm font-medium  uppercase  text-start'>Status</th>
           
            
           
            
            
            </tr>
    </thead>
    <tbody>
      
           
           {certificates.map(certif=>{
            return (  <tr key={certif.id} className=''> 
                 <td  className='text-gray-800 px-6 py-4 '>{certif.num}</td>
              <td  className='text-gray-800 px-6 py-4 '>{certif.student}</td>
              <td  className='text-gray-800 px-6 py-4' >{certif.email}</td>
              <td  className='text-gray-800 px-6 py-4' >{certif.course}</td>
              <td  className='text-gray-800 px-6 py-4' >{certif.delivredOn}</td>
              <td  className='text-gray-800 px-6 py-4 ' >{certif.status==="validate"?<GrValidate className='text-green-600 text-xl'/>:<MdOutlinePending className='text-red-800 text-xl'/>}</td>
             
             
              
              </tr>)
         
           })}
        
    </tbody>
   
</table>
    </div>
  )
}

export default CertificateTable
import React from 'react'
import { GrValidate } from "react-icons/gr";
import { MdOutlinePending } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function CertificateTable({certificates,setCertifId}) {
    const [item, setitem] = useState("")
 
     const navigate=useNavigate()
     const handleSelectChange=(e,id)=>{
      const selectedValue=e.target.value;
      setCertifId(id)
      if(selectedValue==="details"){
        navigate("/edit/certificate")
      }
     }
  return (
    <div>
        <table className='items-center  shadow w-full bg-white    '>
    <thead>
        <tr>
        <th className=' w-64   px-6 py-3   text-sm text-gray-500 font-medium uppercase   text-start'>certificate Num</th>
        <th className=' w-64   px-6 py-3   text-sm text-gray-500 font-medium uppercase   text-start'>Student</th>
        <th className='  px-6 py-3  text-gray-500  text-sm font-medium uppercase  text-start'>Email</th>
            <th className=' w-64  px-6 py-3  align-middle text-sm text-gray-500 font-medium uppercase   text-start'>Course</th>
            <th className='  px-6 py-3  text-gray-500  text-sm font-medium  uppercase  text-start'>Issued On</th>
            <th className='  px-6 py-3  text-gray-500  text-sm font-medium  uppercase  text-start'>Status</th>
            <th className='  px-6 py-3  text-gray-500  text-sm font-medium  uppercase  text-start'>Action</th>
           
            
           
            
            
            </tr>
    </thead>
    <tbody>
      
           
           {certificates.map(certif=>{
            return (  <tr key={certif.id} className={`${certif.id%2==0? "bg-gray-100":"bg-gray-300"} hover:bg-red-400`} > 
                 <td  className='text-gray-800 px-6 py-4 '>{certif.num}</td>
              <td  className='text-gray-800 px-6 py-4 '>{certif.student}</td>
              <td  className='text-gray-800 px-6 py-4' >{certif.email}</td>
              <td  className='text-gray-800 px-6 py-4' >{certif.course}</td>
              <td  className='text-gray-800 px-6 py-4' >{certif.IssuedOn}</td>
              <td  className='text-gray-800 px-6 py-4 ' >{certif.status==="validate"?<GrValidate className='text-green-600 text-xl'/>:<MdOutlinePending className='text-red-800 text-xl'/>}</td>
              <td><select className='text-gray-800 py-2 bg-transparent  text-sm  focus:outline-none'  onChange={(e)=>handleSelectChange(e,certif.id)}>
                <option value="download">Download</option>
                <option  value="details"> Show Details </option>
                <option value="email" >Send by email</option>
                
              </select>
             </td>
             
              
              </tr>)
         
           })}
        
    </tbody>
   
</table>
    </div>
  )
}

export default CertificateTable
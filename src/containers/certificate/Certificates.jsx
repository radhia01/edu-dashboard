import React from 'react'
import CertificateTable from '../../components/Table/CertificateTable'
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
function Certificates({setCertifId}) {
    const navigate=useNavigate()
    const certificatesList=[
        {   id:1,
            student:"Ali Ben Youssef ",
            IssuedOn:"14/11/2024",
            email:"example01@gmail.com",
            course:"JavaScript : De Débutant à Expert",
            status:"validate",
            num:"#1235478796"

        },
        {   id:2,
            student:"Ahlem Suissi ",
            IssuedOn:"10/10/2024",
            email:"example01@gmail.com",
            course:"JavaScript : De Débutant à Expert",
            status:"pending",
            num:"#1222358747"

        },
        {   id:3,
            student:"Meriem Ben Soltane ",
            IssuedOn:"20/10/2024",
            email:"example01@gmail.com",
            course:"Développement Web Frontend avec React",
            status:"validate",
            num:"#1235478741"

        },
        {   id:4,
            student:"Aya Mrabet ",
            IssuedOn:"10/10/2024",
            email:"example01@gmail.com",
            course:"JavaScript : De Débutant à Expert",
            status:"validate",
            num:"#1235472014"

        },
        {   id:5,
            student:"Amir Farhat ",
            IssuedOn:"10/01/2024",
            email:"example01@gmail.com",
            course:"JavaScript : De Débutant à Expert",
            status:"validate",
            num:"#1235470214"

        }
    ]
  return (
    <div className='min-h-screen py-4  px-2  mx-auto  '>
        <div className=" flex p-4 relative bg-white shadow ">
            <h1 className='text-2xl text-red-800  font-bold '>Certificates List </h1>
            <button className='bg-red-500 text-white  top-2 flex  font-medium absolute right-2 py-3 px-2 focus:outline-none border-none ' onClick={()=>{ setCertifId(null);navigate("/add/certificate")}}> <AiOutlinePlus className='mt-1  mr-1 text-lg'/>Add new Certificate </button>
        </div>
        <div className="mt-4"><CertificateTable certificates={certificatesList} setCertifId={setCertifId}/></div>
    </div>
  )
}

export default Certificates
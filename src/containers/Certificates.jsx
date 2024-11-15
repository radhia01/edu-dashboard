import React from 'react'
import CertificateTable from '../components/Table/CertificateTable'
import { AiOutlinePlus } from "react-icons/ai";

function Certificates() {
    const certificatesList=[
        {   id:1,
            student:"Ali Ben Youssef ",
            delivredOn:"14/11/2024",
            email:"example01@gmail.com",
            course:"JavaScript : De Débutant à Expert",
            status:"validate",
            num:"#1235478796"

        },
        {   id:2,
            student:"Ahlem Suissi ",
            delivredOn:"10/10/2024",
            email:"example01@gmail.com",
            course:"JavaScript : De Débutant à Expert",
            status:"pending",
            num:"#1222358747"

        },
        {   id:3,
            student:"Meriem Ben Soltane ",
            delivredOn:"20/10/2024",
            email:"example01@gmail.com",
            course:"Développement Web Frontend avec React",
            status:"validate",
            num:"#123547"

        },
        {   id:4,
            student:"Aya Mrabet ",
            delivredOn:"10/10/2024",
            email:"example01@gmail.com",
            course:"JavaScript : De Débutant à Expert",
            status:"validate",
            num:"#123547"

        },
        {   id:5,
            student:"Amir Farhat ",
            delivredOn:"10/01/2024",
            email:"example01@gmail.com",
            course:"JavaScript : De Débutant à Expert",
            status:"validate",
            num:"#123547"

        }
    ]
  return (
    <div className='min-h-screen py-4  px-2  mx-auto  '>
     <div className=" flex p-4 relative bg-white shadow ">
                <h1 className='text-2xl text-red-800  font-bold '>Certificates List </h1>
                  <button className='bg-red-500 text-white  top-2 flex  font-medium absolute right-2 py-3 px-2 focus:outline-none border-none ' onClick={()=>{setCourseId(null),navigate("/add/course")}}> <AiOutlinePlus className='mt-1  mr-1 text-lg'/>Add new Certificate </button>
              </div>
              <div className="mt-4"><CertificateTable certificates={certificatesList}/></div>
            </div>
  )
}

export default Certificates
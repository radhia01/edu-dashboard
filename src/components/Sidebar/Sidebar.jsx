import React from 'react'
import AcccountToggle from './AcccountToggle'
import {Link} from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { AiOutlineDropbox } from "react-icons/ai";
import { AiOutlineContainer } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
function Sidabar({minimize}) {
  const sidebarLinks=[
    {
      id:1,
      link:"/",
      name:"Dashboard",
      icon:<AiOutlineHome/>,

    },
    {
      id:2,
      link:"/professors",
      name:"Professors",
      icon:<AiOutlineUsergroupDelete/>

    },
    {
      id:3,
      link:"/students",
      name:"Students",
      icon:<AiOutlineUsergroupDelete/>

    },
    {
      id:4,
      link:"/courses",
      name:"Courses",
      icon:<GiGraduateCap/>

    },
    {
      id:5,
      link:"/top/students",
      name:"Top Students",
      icon:<GiPodiumWinner/>

    },
    {
      id:6,
      link:"/certificates",
      name:"Certificates",
      icon:<GrCertificate/>

    },
  ]
  const authLinks=[
    {id:1,
      name:"Logout",
      link:"/" 
    }
  ]
  return (
    <div className={`fixed top-0 left-0 flex  ${minimize ? "w-20" :"w-60"} flex-col    bg-gray-600 overflow-y-auto h-full` }>
        <div className=" h-20  bg-red-800 flex justify-center items-center">
           <span className='text-3xl'><AiOutlineDropbox/> </span>{! minimize && <h1 className='text-2xl font-bold   '>TuniEduc</h1>}
        </div>
        <hr></hr>
        <div className="flex-1">
  <ul className="py-4   list-none  " style={{listStyleType:"none"}}>
    {sidebarLinks.map(link => {
      return (
        <li 
          key={link.id} 
          
          className="  py-4 "
        >
          <Link 
            className="text-sm  text-gray-200 hover:text-red-600 flex relative w-full uppercase py-3 justify-center font-bold    "  
            to={link.link}
          > 
            <span className="text-2xl absolute left-6">{link.icon}</span>
            {!minimize && link.name}
          </Link>
        </li>
      );
    })}
  </ul>
</div>

        <hr></hr>
        <div className=""><ul className='p-3 font-medium text-center '>
          {authLinks.map(link=>{
            return  <li key={link.id} className=' text-gray-400   hover:text-gray-400'><Link  to={link.link}>{link.name}</Link></li>
          })}</ul></div>
          </div>
    
  )
}

export default Sidabar
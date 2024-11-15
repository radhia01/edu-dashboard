import React from 'react';
import AcccountToggle from './AcccountToggle';
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUsergroupDelete, AiOutlineDropbox } from "react-icons/ai";
import { GiGraduateCap, GiPodiumWinner } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";

function Sidebar({ minimize, setAuthenticated }) {
  const sidebarLinks = [
    {
      id: 1,
      link: "/dashboard",
      name: "Dashboard",
      icon: <AiOutlineHome />,
    },
    {
      id: 2,
      link: "/professors",
      name: "Professors",
      icon: <AiOutlineUsergroupDelete />,
    },
    {
      id: 3,
      link: "/students",
      name: "Students",
      icon: <AiOutlineUsergroupDelete />,
    },
    {
      id: 4,
      link: "/courses",
      name: "Courses",
      icon: <GiGraduateCap />,
    },
    {
      id: 5,
      link: "/top/students",
      name: "Top Students",
      icon: <GiPodiumWinner />,
    },
    {
      id: 6,
      link: "/certificates",
      name: "Certificates",
      icon: <GrCertificate />,
    },
    {
      id: 7,
      link: "/calendar",
      name: "Calendar",
      icon: <FaCalendarAlt />,
    },
  ];

  const authLinks = [
    {
      id: 1,
      name: "Logout",
      link: "/login",
    },
  ];

  return (
    <div className={`fixed top-0 left-0 flex ${minimize ? "w-20" : "w-60"} flex-col bg-gray-600 overflow-y-auto h-full`}>
      <div className="h-20 bg-red-800 flex justify-center items-center">
        <span className='text-3xl'><AiOutlineDropbox /></span>
        {!minimize && <h1 className='text-2xl font-bold ml-2'>TuniEduc</h1>}
      </div>
      <hr />
      <div className="flex-1">
        <ul className="py-4 list-none">
          {sidebarLinks.map(link => {
            return (
              <li key={link.id} className="py-4">
                <Link
                  className={`text-sm  text-gray-200 hover:text-red-600   flex relative w-full uppercase py-4  justify-center font-bold transition-colors duration-200 $`}
                  to={link.link}
                >
                  <span className="text-2xl absolute left-6">{link.icon}</span>
                  {!minimize && <span className=' absolute  left-20'>{link.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div>
        <ul className='p-3 font-medium text-center'>
          {authLinks.map(link => {
            return (
              <li 
                key={link.id} 
                onClick={() => setAuthenticated(false)} 
                className='text-gray-400 hover:text-red-600 cursor-pointer transition-colors duration-200'
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

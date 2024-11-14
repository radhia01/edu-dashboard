import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar'
import Dashboard from './Dsahboard'
import  {Outlet} from "react-router-dom"
import Header from "../components/Header"
function Layout() {
  return (
    <div className=' flex h-screen   overflow-hidden'>
        {/* <Sidebar/> */}
        <div className="  ml-60 flex flex-1 flex-col overflow-y-auto ">
            <Navbar/>
           <Header/>
            <main className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
             <Outlet/>
            </main>
        </div>
      
    </div>
  )
}

export default Layout
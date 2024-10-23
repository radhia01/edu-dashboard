import React from 'react';
import { Link } from 'react-router-dom';
function SignUp() {
  return (
    <div className=' w-screen h-screen  flex   '>
    
        <div className="basis-1/2">
        <img className='h-full w-full ' src="https://img.freepik.com/free-photo/typing-laptop-using-wireless-technology-indoors-generated-by-ai_188544-25892.jpg"/></div>
      <div className=" basis-1/2 flex flex-col   w-full  h-full   justify-center p-10 bg-white shadow text-gray-950 rounded-lg">
        <form action="" className='space-y-4'>
          <h1 className='text-3xl text-gray-700 m-3 font-bold'>Sign Up</h1>

          <div className="m-3">
            <label className='block text-sm font-medium text-gray-900'>First Name</label>
            <input
            required
              type="text"
              className='  w-2/3 block w-full bg-white h-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600'
            />
          </div>

          <div className="m-3">
            <label className='block text-sm font-medium text-gray-900'>Last Name</label>
            <input
            required
              type="text"
              className='  w-2/3 block w-full bg-white h-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600'
            />
          </div>

          <div className="m-3 flex flex-col">
            <label htmlFor="email" className='text-sm font-medium text-gray-900'>Email</label>
            <input
            required
              type="email"
              className='    w-2/3 bg-white h-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600'
            />
          </div>

          <div className="m-3 flex flex-col">
            <label className='text-sm font-medium text-gray-900'>Password</label>
            <input
            required
              type="password"
              placeholder="••••••••"
              className=  '  w-2/3 bg-white h-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600'
            />
          </div>

          <div className="m-3">
            <button  type="submit" className='  w-2/3 bg-gray-800 text-white p-3 w-full rounded-lg hover:bg-gray-700 transition duration-200'>
              Create your account
            </button>
          </div>
          <div className="text-gray-400 flex m-3 ">  <p className='text-sm'>Already  have an account?<Link to="/">  Login here </Link></p> </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

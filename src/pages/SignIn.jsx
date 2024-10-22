import React from 'react';

function SignIn() {
  return (
    <div className=' h-screen w-screen flex  bg-white'>
      <div className="basis-1/2"> <img   className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwbGFwdG9wfGVufDB8fDB8fHww"/></div> 

      <div className=" basis-1/2 flex flex-col mx-auto justify-center p-10   w-full  h-full  bg-white  text-gray-950 rounded-lg">
        <form action="" className='space-y-4'>
          <h1 className='text-3xl text-gray-700 m-2 font-bold '>Sign In</h1>

        

          <div className="m-3 flex flex-col">
            <label htmlFor="email" className='text-sm font-medium text-gray-900'>Email</label>
            <input
            required
              type="email"
              className='   w-2/3 bg-white h-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600'
            />
          </div>

          <div className="m-3 flex flex-col">
            <label className='text-sm font-medium text-gray-900'>Password</label>
            <input
            required
              type="password"
              placeholder="••••••••"
              className='   w-2/3 bg-white h-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600'
            />
          </div>

          <div>
            <button  type="submit" className='bg-gray-800 w-2/3 text-white p-3 m-3  rounded-lg hover:bg-gray-700 '>
              Sign In
            </button>
          </div>
          <div className="text-gray-400 flex m-3 ">  <p className='text-sm'> You Don't have an account?<a href="/signUp">  Register here </a></p> </div>

        </form>
      </div>
    </div>
  );
}

export default SignIn;

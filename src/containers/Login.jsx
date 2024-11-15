import React from 'react'

function Login({setAuthenticated}) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        setAuthenticated(true)
    }
  return (
    <div className='h-screen w-screen    bg-gray-200 flex justify-center items-center '>

<div className="shadow  w-1/3  flex flex-col  mb-2 relative h-2/3 bg-white  rounded-2xl   ">
<div className="flex bg-red-800  justify-center py-4 px-2  font-bold   "><h1 className='text-white text-2xl'>Login</h1></div>
<div className="py-4   absolute  w-full  left-20  top-20  ">
    <form  className='' onSubmit={handleSubmit}>
        <div className='flex flex-col py-2 px-3  justify-center '>
            <label  className='text-gray-600'>Email</label>
            <input type="email"  className='bg-white border h-16  w-2/3  rounded-xl focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 ' />
        </div>
        <div className='flex flex-col py-2 px-3  '>
            <label  className='text-gray-600'>Password</label>
            <input type="password"  className='bg-white border h-16 rounded-xl w-2/3 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 ' />
        </div>
        <div className=" mt-8 flex  ml-2 "><button type="submit" className='py-4 px-1 text-sm text-white bg-red-800  w-2/3 border-none   font-semibold focus:outline-none' >Submit</button></div>
    </form>
</div>
</div>
    </div>
  )
}

export default Login
import { useState } from 'react'
import { axiosInstance } from '../api/axios'

function SendEmail() {
    const [email, setEmail] = useState("")
  const handleSubmit=async()=>{
    console.log(email)
  try {
    await axiosInstance.post("/send/otp",email)
      
  } catch (error) {
    console.log(error)
    
  }
  }
  return (
    <div className='w-full h-full flex  justify-center items-center '>
      <div className="w-full max-w-lg border border-gray-200 flex flex-col gap-4 p-6  shadow ">
        <label htmlFor="">Email</label>
        <input type="text" className='h-16 rounded border border-gray-200 ' onChange={e=>setEmail(e.target.value)} />
        <button className='bg-black px-4 py-2 rounded text-white hover:bg-orange-500' onClick={handleSubmit}>SEND</button>
      </div>

    </div>
  )
}

export default SendEmail
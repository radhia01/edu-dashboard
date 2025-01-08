
import { useState } from "react"
import Success from "./Success"
import Error from "./Error"
import axios from "axios"
function ResetPassword() {
  const [show, setShow] = useState({
    showLastPassword:false,
    showNewPassword:false,
    showConfirmPassword:false
  })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
   const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
         const response=await axios.post("/reset/password")
         if(response){
          setSuccess(true)
         }
    } catch (error) {
     setError(error?.response?.data?.message)
      
    }
   }
  return (
    <div className="w-full h-full flex justify-center items-center ">

        <div className="w-full max-w-lg border border-gray-300  rounded ">
              <div className="bg-gray-400 text-white flex justify-center items-center p-2">
                <h1 className="text-2xl  font-bold">Reset Password </h1>
              </div>
              <form  onSubmit={handleSubmit} className="flex flex-col gap-4 py-4 px-2">
                <div className=" flex flex-col gap-2 ">
                  <label htmlFor="">Last Password</label>
                  <div className="relative">
                  <input type={show.showLastPassword?"text":"password"}className="h-12 rounded  w-full border border-gray-200 " />
                  <button  type="button" className="absolute top-2 right-4 text-sm " onClick={()=>setShow({...show,showLastPassword:!show.showLastPassword})}>{show.showLastPassword?"hide":"show"}</button>
                  </div>
                 
                </div>
                <div className=" flex flex-col gap-2 ">
                  <label htmlFor="">New Password</label>
                  <div className="relative">
                  <input type={show.showNewPassword?"text":"password"}className="h-12 rounded  w-full border border-gray-200 " />
                  <button  type="button" className="absolute top-2 right-4 text-sm " onClick={()=>setShow({...show,showNewPassword:!show.showNewPassword})}>{show.showNewPassword?"hide":"show"}</button>
                  </div>
                 
                </div>
                <div className=" flex flex-col gap-2 ">
                  <label htmlFor="">Confirm New  Password</label>
                  <div className="relative">
                  <input type={show.showConfirmPassword?"text":"password"}className="h-12 rounded  w-full border border-gray-200 " />
                  <button  type="button" className="absolute top-2 right-4 text-sm " onClick={()=>setShow({...show,showConfirmPassword:!show.showConfirmPassword})}>{show.showConfirmPassword?"hide":"show"}</button>
                  </div>
                 
                </div>
                <div className="flex justify-center"><button className="bg-black text-white hover:bg-orange-500 w-1/2 p-2">Send </button></div>
              </form>
        </div>
       {success &&  <Success message={"Your password is updated successfully"}/>} 
       <Error  message={"Your last password is incorrect "}/>
    </div>
  )
}

export default ResetPassword
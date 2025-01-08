import { useState } from "react"
import { axiosInstance } from "../api/axios"
import { useNavigate } from "react-router-dom"
import Error from "./Error"
function SignUp() {
const navigate=useNavigate()
const [showPassword, setShowPassword] = useState(false)
const [error, setError] = useState(null)
const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
})
const handleChange=(e)=>{
    setUser({...user,
        [e.target.name]:e.target.value
    })
}
const handleSubmit=async (e)=>{
    e.preventDefault()
       setError(null)
         try {
              const response= await axiosInstance.post("/auth/signUp",user) 
              if(response){
              navigate("/")
              }
              setUser({...user,
                name:"",
                email:" ",
                password:""
              })
         } catch (error) {
            setError(error?.response?.data?.message)
            
            
         }
}
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className=" w-full max-w-lg  rounded border border-gray-300 flex-col gap-4   relative  ">
               <div className=" flex justify-center bg-gray-700 text-white  py-4 px-2  text-xl  uppercase "> <h1 >signUp</h1></div>
               <div className="py-4  px-14">
                  <form  className="space-y-6 " onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                        <label htmlFor="">Name </label>
                        <input
                           className="h-12 rounded border border-gray-200 "    
                           type="text" 
                           name="name"
                           onChange={handleChange}
                           />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Email </label>
                        <input
                           className="h-12 rounded border border-gray-200 "    
                           type="text" 
                           name="email"
                           onChange={handleChange}
                           />
                    </div>
                    <div className="flex flex-col  ">
                       
                             <div className="flex flex-col relative  ">
                        <label >Password </label>
                        
                        <input
                           className="   h-12     rounded border border-gray-200 "
                           name="password"
                           value={user.password}
                            type={showPassword?"text":"password"} 
                            onChange={handleChange}/>
                            <button type="button" className=" absolute text-sm right-2 top-9 "onClick={()=>setShowPassword(!showPassword)}> {showPassword?"hide":"show"}</button>
                       
                       
                    </div>
                       
                       
                    </div>
                    <div className=" flex justify-center">
                        <button
                          type="submit"
                         className="bg-blue-400 text-white font-bold  p-2 w-full   rounded hover:bg-blue-700  ">signUp </button></div>

                  </form>
               </div>
        </div>
        {error && <Error message={error}/>}
    </div>
  )
}

export default SignUp
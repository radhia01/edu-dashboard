import { useState } from "react"
import { privateAxios } from "../api/axios"
import { useNavigate,Link } from "react-router-dom"
function SignIn() {
const navigate=useNavigate()
const [showPassword, setShowPassword] = useState(false)
const [user, setUser] = useState({
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
         try {
              const response= await privateAxios.post("/auth/signIn",user) 
              if(response){
              navigate("/home")
              }
              setUser({...user,
                email:" ",
                password:""
              })
         } catch (error) {
            console.log(error)
            
         }
}

  return (
    <div className="w-full h-full flex justify-center items-center ">
        <div className=" w-full max-w-lg  rounded border border-gray-300 flex-col gap-4     ">
               <div className=" flex justify-center bg-gray-700 text-white  py-4 px-2  text-xl  uppercase "> <h1 >signIn</h1></div>
               <div className="py-4  px-14">
                  <form  className="space-y-6 " onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label >Email </label>
                        <input
                           className="h-12 rounded border border-gray-200 "    
                           type="text" 
                           name="email"
                           value={user.email}
                           onChange={handleChange}
                           />
                    </div>
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
                    <div className=" flex justify-center">
                        <button
                          type="submit"
                         className="bg-blue-400 text-white font-bold  p-2 w-full   rounded hover:bg-blue-700  ">signIn </button></div>

                  </form>
                  <div className="flex  flex-col space-y-4 justify-center items-center  mt-4 ">
                  <Link to="send/email" className="  underline hover:text-orange-500"> forget Password? </Link>
                  <Link to="/signUp"> You don't have an account? ? </Link>
                  </div>
               </div>
        </div>
    </div>
  )
}

export default SignIn
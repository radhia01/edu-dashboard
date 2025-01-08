
import {Route,Routes} from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home.JSX"
import ResetPassword from "./pages/ResetPassword"
import VerifyOtp from "./pages/VerifyOtp"
import SendEmail from "./pages/SendEmail"

function App() {
      
  return (
   <div className='h-screen overflow-hidden  bg-white '>
       <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/reset/password/:id" element={<ResetPassword/>}></Route>
        <Route path="/verify/OTP/:id" element={<VerifyOtp/>}></Route>
        <Route path="/send/email" element={<SendEmail/>}></Route>
       </Routes>
   </div>)   
}

export default App

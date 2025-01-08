import { useState,useEffect } from "react"
function Error({message}) {
    const [visible, setVisible] = useState(true)
    useEffect(() => {
      const timer= setTimeout(() => {
           setVisible(false)
       }, 1200);
       return ()=>clearTimeout(timer)
    }, [visible])
 
    
  return (
    visible?<div className="bg-red-500 w-full h-10 flex items-center  p-4 text-white text-sm rounded fixed bottom-2">{message}</div>:null
  )
}

export default Error
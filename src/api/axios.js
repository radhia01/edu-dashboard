import axios from "axios"
export const axiosInstance=axios.create({baseURL:"http://localhost:3001",
    headers:{
        "Content-Type":"application/json"    
    }
})
export const privateAxios=axios.create({baseURL:"http://localhost:3001",
    withCredentials:true,
    credential:"include",
    
})

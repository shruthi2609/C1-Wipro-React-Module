import axios from "axios"
import { useState } from "react"

const UpdatePassword=()=>{
    const [updatedPw,setUPW]=useState("")
    const [message,setMessage]=useState("")
    const handleChange=(e)=>{
     
        setUPW(e.target.value)
    }
    const updatePassword=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/updatepassword",
        {"upassword":updatedPw},
        {
            headers:{Authorization:"Bearer "+localStorage.getItem("token")}
        }).then((res)=>setMessage(res.data.msg)).catch((err)=>console.log(err))
    }
    return(
        <div>
    <h1>Update Password</h1>
    Enter the new password:<input type="text" onChange={(e)=>handleChange(e)}></input>
    <button onClick={(e)=>updatePassword(e)}>Update</button>
    <h3>{message}</h3>
    </div>
    )
        
    
}
export default UpdatePassword
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function SignInComponentInt(){
    const navigate=useNavigate()
    const [message,setMessage]=useState("")
    const [flag,setFlag]=useState(false)
    const [uname,setuname]=useState("")
    const [password,setPassword]=useState("")
    const handleChange=(e)=>{
        if(e.target.name==="username"){
           
            setuname(e.target.value)
        }
        if(e.target.name==="pwd"){
          
            setPassword(e.target.value)
        }
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        let serverresponse;
        try{
        serverresponse=await axios.post("http://localhost:3001/login",{"email":uname,"password":password})
            setMessage(serverresponse.data.msg)
            setFlag(serverresponse.data.status)
           if(serverresponse.data.status){
            localStorage.setItem("token",serverresponse.data.token)
           }
        }
        catch(err){
           console.log(err)
        }
    }
    return(
        <div>
            <form>
                Username:<input type='text' name="username" onChange={(e)=>handleChange(e)}></input>
                Password:<input type='text' name="pwd" onChange={(e)=>handleChange(e)}></input>
            </form>
            <button onClick={handleSubmit}>signin</button>
            {
                flag?navigate(`/dashboard/${uname}`):<h3>{message}</h3>
            }
        </div>
    )
}
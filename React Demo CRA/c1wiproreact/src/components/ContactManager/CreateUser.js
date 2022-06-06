import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function CreateUser(){
    const [id,setId]=useState("")
    const [uname,setUsername]=useState("")
    const [uemail,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const navigate=useNavigate()
     const handleChange=(e)=>{
        if(e.target.name==="userid"){
            setId(e.target.value)
        }
        if(e.target.name==="username"){
            setUsername(e.target.value)
        }
        if(e.target.name==="useremail"){
            setEmail(e.target.value)
        }
    }
   const addUser=()=>{
        axios.post("http://localhost:3001/employeeDetails",{
            "id":id,
            "empName":uname,
            "empEmail":uemail
        }).then((response)=>setMessage(response.statusText)).catch((err)=>setMessage("duplicate ID"))
       setTimeout(()=> navigate("/"),5000)
       
    }
    return(
        <div>
             <form>
                Id:<input type="text" name="userid" onChange={(e)=>handleChange(e)}></input>
                Contact Name:<input type="text" name="username" onChange={(e)=>handleChange(e)}></input>
                email:<input type="text" name="useremail" onChange={(e)=>handleChange(e)}></input>
            </form>

            <button onClick={addUser}>add</button>
            <p>{message}</p>
        </div>
    )
}
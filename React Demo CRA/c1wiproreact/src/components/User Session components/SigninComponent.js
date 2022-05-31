import { useState } from "react";

import { useNavigate } from "react-router-dom"
export default function SignInComponent(){
    const navigate=useNavigate()
    const [message,setMessage]=useState("")
    const [flag,setFlag]=useState(true)
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
    const handleSubmit=()=>{
        let text=""
        
        if(uname==="john@gmail.com"&&password==="admin"){
            setFlag(false)
            localStorage.setItem("globalusername",uname)
        }
        else{
            text+="authentication failed"
            
        }
        setMessage(text) 
    }
    return(
        <div>
            {
                console.log(uname)
            }
            {
                console.log(password)
            }
            <form>
                Username:<input type='text' name="username" onChange={(e)=>handleChange(e)}></input>
                Password:<input type='text' name="pwd" onChange={(e)=>handleChange(e)}></input>
            </form>
            <button onClick={handleSubmit}>signin</button>
            {
                flag?<h3>{message}</h3>:navigate("/dashboard")
            }
        </div>
    )
}
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const SignUpComponent=()=>{
    const [username,setUname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const navigate=useNavigate()
    const handleChange=(e)=>{
       if(e.target.name==="username"){
           setUname(e.target.value)
       }
       if(e.target.name==="password"){
           setPassword(e.target.value)
       }
    }
    const handleSubmit=()=>{
        navigate(`/dashboard/${username}`)
    }
    return(
        <div>
            {console.log(username,password)}
            Username:<input type="text" onChange={(e)=>handleChange(e)} name="username"></input>
            <br></br>
            Password:<input type="text" name="password"
            onChange={(e)=>handleChange(e)}></input>
            <br></br>
            Email:<input type="text"></input>
            <br></br>
            Phone:<input type="text"></input>
            <br></br>
            <button onClick={handleSubmit}>signup</button>
        </div>

    )

}
export default SignUpComponent
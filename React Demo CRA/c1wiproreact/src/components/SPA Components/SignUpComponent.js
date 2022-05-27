import { useState } from "react"
import { useNavigate } from "react-router-dom"
const SignUpComponent=()=>{
    const [username,setUname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [rpassword,setRPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [message,setMessage]=useState("")
    const [flag,setFlag]=useState(true)
    const [comments,setComments]=useState("")
    const [exp,setExp]=useState("")
    const navigate=useNavigate()
    const handleChange=(e)=>{
       if(e.target.name==="username"){
           setUname(e.target.value)
       }
       if(e.target.name==="password"){
           setPassword(e.target.value)
       }
       if(e.target.name==="rpassword"){
           setRPassword(e.target.value)
       }
       if(e.target.name==="comments"){
        setComments(e.target.value)
       }
       if(e.target.name==="experience"){
           setExp(e.target.value)
       }
    }
    const handleSubmit=()=>{
        let text=""
        if(password!==rpassword){
            text+="password and re-enterred password does not match"
        }
        else{
            setFlag(false)
        }
        setMessage(text) 
    }
    return(
        <div>
            {console.log(exp)}
            Username:<input type="text" onChange={(e)=>handleChange(e)} name="username"></input>
            <br></br>
            Password:<input type="text" name="password"
            onChange={(e)=>handleChange(e)}></input>
            <br></br>
            Re-enter the password:<input type="text" name="rpassword"
            onChange={(e)=>handleChange(e)}></input>
            <br></br>
            Email:<input type="text"></input>
            <br></br>
            Phone:<input type="text"></input>
            <br></br>
            <textarea name="comments" onChange={(e)=>handleChange(e)}></textarea>
            <select name="experience" onChange={(e)=>handleChange(e)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onClick={handleSubmit}>signup</button>
            {
                flag?<h3>{message}</h3>:navigate(`/dashboard/${username}`)
            }
        </div>

    )

}
export default SignUpComponent
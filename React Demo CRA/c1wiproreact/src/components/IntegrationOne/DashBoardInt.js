
import { useParams,useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
export default function DashBoard(){
    const navigate=useNavigate()
    const {email}=useParams()
    const [serverresponse,setResponse]=useState({})
   useEffect(()=>{
        axios.get(`http://localhost:3001/getUser/${email}`).then((res)=>setResponse(res.data)).then((err)=>console.log(err))
    },[])
    const viewProfile=()=>{
        axios.get(`http://localhost:3001/getUser/${email}`).then((res)=>setResponse(res.data)).then((err)=>console.log(err))
    }
    const handleUpdate=(e)=>{
        e.preventDefault()
        navigate("/updatepassword")
    }
    return(
        <div>
            <h1>Welcome {serverresponse.email}</h1>
            <h2>Role :{serverresponse.role}</h2>
            <p>Country:{serverresponse.country}</p>
           
            <button onClick={(e)=>handleUpdate(e)}>update password</button>
        </div>
    )
}
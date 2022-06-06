import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function DeleteUser(){
    const [message,setMessage]=useState("")
    const {userid}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.delete(`http://localhost:3001/employeeDetails/${userid}`).then((res)=>{
        setMessage("deleted successfully")
        }).catch((err)=>console.log("error"))
    },[])
    const handleSubmit=()=>{
        navigate("/")
    }
    return(
        <div>
            <p>{message}</p>
            <button onClick={handleSubmit}>go back to view page</button>
        </div>
    )
}
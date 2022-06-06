import {useEffect, useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function HomePage(){
    const [res,setRes]=useState([])
    const navigate=useNavigate()
    useEffect(
        ()=>{
        console.log("inside useeffect")
        axios.get("http://localhost:3001/employeeDetails").then((response)=>setRes(response.data)).catch((err)=>console.log(err))
    },[]
    )
   /*  const handleChange=(e)=>{
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
        }).then((response)=>console.log(response)).catch((err)=>console.log(err))
       setRes([...res,{"id":id,"empName":uname,"empEmail":uemail}])
    }*/
    const handleSubmit=()=>{
        navigate("/create")
    }
    const handleDelete=(userid)=>{
        navigate(`/delete/${userid}`)
    }
    return(
        <div>
            {console.log("render")}
            <h1>Contact Manager</h1>
           <button onClick={handleSubmit}>click here to create a contact</button>
            {res.map((item)=>(
                <div>
                    <h1>{item.empName}</h1>
                    <p>{item.empEmail}</p>
                    <button>edit</button>
                    <button onClick={()=>handleDelete(item.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}
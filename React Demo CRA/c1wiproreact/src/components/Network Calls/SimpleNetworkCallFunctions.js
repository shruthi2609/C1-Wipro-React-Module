import {useEffect, useState} from "react"
import axios from "axios"
export default function FunctionCompo(){
    const [res,setRes]=useState([])
    useEffect(
        ()=>{
        console.log("inside useeffect")
        axios.get("http://localhost:3001/empDetails").then((response)=>setRes(response.data)).catch((err)=>console.log(err))
    },[]
    )
    const addUser=()=>{
        axios.post("http://localhost:3001/empDetails",{
            "id":13,
            "fname":"react demo",
            "email":"demo@gmail.com"
        }).then((response)=>console.log(response)).catch((err)=>console.log(err))
    }
    return(
        <div>
            {console.log("render")}
            <h1>Employee Management </h1>
            <button onClick={addUser}>add</button>
            {res.map((item)=>(
                <div>
                    <h1>{item.fname}</h1>
                    <p>{item.email}</p>
                </div>
            ))}
        </div>
    )
}
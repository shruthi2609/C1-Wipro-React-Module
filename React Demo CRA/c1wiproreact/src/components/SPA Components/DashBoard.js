import { useParams,useNavigate } from "react-router-dom"
import { useState } from "react"
export default function DashBoard(){
    const navigate=useNavigate()
    const {username}=useParams()
    const [find,setSearch]=useState("")
    const handleSearch=()=>{
        navigate(`/search?q=${find}&uname=${username}`)
    }
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    return(
        <div>
            <h1>Welcome {username}!</h1>
          Search your interest:  <input type="text" onChange={(e)=>handleChange(e)}></input>
            <button onClick={handleSearch}>search</button>
        </div>

    )
}
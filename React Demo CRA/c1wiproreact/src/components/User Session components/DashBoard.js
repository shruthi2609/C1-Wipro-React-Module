import { useParams,useNavigate } from "react-router-dom"
import { useState } from "react"
export default function DashBoardComponent(){
    const navigate=useNavigate()
   
    const [find,setSearch]=useState("")
    const globalusername=localStorage.getItem("globalusername")
    const handleSearch=()=>{
        navigate(`/search`)
    }
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    return(
        <div>
            <h1>Welcome:{globalusername} !</h1>
          Search your interest:  <input type="text" onChange={(e)=>handleChange(e)}></input>
            <button onClick={handleSearch}>search</button>
        </div>

    )
}
import { useNavigate } from "react-router-dom"

export default function SearchComponent(){
    const globalusername=localStorage.getItem("globalusername")
    const navigate=useNavigate()
    const handleSubmit=()=>{
        localStorage.removeItem("globalusername")
        navigate("/")
    }
    return(
        <div>
          <h1>User Session :{globalusername} </h1>
          <button onClick={handleSubmit}>logout</button>
        </div>
    )
}
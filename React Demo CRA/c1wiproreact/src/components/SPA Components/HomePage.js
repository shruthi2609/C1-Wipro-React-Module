import { useNavigate } from "react-router-dom"
export default function HomePage(){
    const navigate=useNavigate()
    const handleSignup=()=>{
        navigate("/signup")
    }
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={handleSignup}>signup</button>
        </div>
    )
}
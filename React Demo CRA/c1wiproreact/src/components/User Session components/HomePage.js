import { useNavigate } from "react-router-dom"
export default function HomePageComponent(){
    const navigate=useNavigate()
    const handleSignin=()=>{
        navigate("/signin")
    }
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={handleSignin}>signin</button>
        </div>
    )
}
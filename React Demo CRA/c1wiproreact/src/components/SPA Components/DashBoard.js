import { useParams } from "react-router-dom"
export default function DashBoard(){
    const {username}=useParams()
    return(
        <div>
            <h1>Welcome {username}!</h1>

        </div>

    )
}
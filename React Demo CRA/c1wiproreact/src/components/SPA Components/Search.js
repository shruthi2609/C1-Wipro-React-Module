import { useSearchParams } from "react-router-dom"
export default function Search(){
    const [qdata]=useSearchParams()
    const query= qdata.get("q")
    const user=qdata.get("uname")
    return(
        <div>
            <h1>You have searched for :{query} {user}</h1>
        </div>
    )
}
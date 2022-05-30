import { Link } from "react-router-dom"
 const Navigation=()=>{
return(
    <nav>
        <Link to="/">Home Page </Link>
        <Link to="/admin">Admin Page </Link>
        <Link to="/contact">Contact Page </Link>

    </nav>
)
}

export const Home=()=>{
return(
    <div>
        <h1>Welcome to the Home Page</h1>
    </div>
)
}

export const AdminPage=(props)=>{
    if(props.user)
    {
    return(
        <div>
            <h1>Welcome to the admin Page</h1>
        </div>
    )
    }
    else{
        return <h1>Protected Route ! please login to see</h1>
    }
}

export const ContactPage=()=>{
    return(
        <div>
            <h1>Welcome to the Contact Page</h1>
        </div>
    )
}

export default Navigation
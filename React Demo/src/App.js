import React from "react"
function AppComponent(props){
    console.log(props.fname,props.role)
    return(
        <div>
        <h1>Username:{props.fname}</h1>
        <h2>Role:{props.role}</h2>
        </div>
    )
}
export default AppComponent


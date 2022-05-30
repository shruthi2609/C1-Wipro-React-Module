import React from "react"
export default class NetworkCall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            serverResponse:[]
        }
    }
  /*   handleAPI=()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{return res.json()}).then((res)=>this.setState({serverResponse:res})).catch((err)=>console.log(err))
    }*/
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{return res.json()}).then((res)=>this.setState({serverResponse:res})).catch((err)=>console.log(err))
    }
    render(){
console.log("inside render")
        return(
        <div>
           
            {
                this.state.serverResponse.map((item)=>(
                    <div>
                        <h1>{item.username}</h1>
                        <h1>{item.email}</h1>
                    </div>
                ))
            }
        </div>
        )
    }
}
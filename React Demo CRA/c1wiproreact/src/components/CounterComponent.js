import React from "react"
class CounterComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        console.log("inside render")
        return(
            <div>
               <button onClick={this.increment}>+</button>
               {this.state.count}
               <button>-</button>
            </div>
        )
    }

}
export default CounterComponent
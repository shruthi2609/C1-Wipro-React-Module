/*function TodoComponent(props){
    
    const addData=()=>{
        console.log("inside add data")
        props.data.push({
            title:"css",
            text:"add css"
        })
        console.log(props.data)
    }
    return(
        <div>
            {console.log(" inside render")}
            <h1>Todo Component</h1>
            <button onClick={addData}>add</button>
            {
                props.data.map((item)=>(
                    <div>
                        <h2>{item.title}</h2>
                        <h2>{item.text}</h2>
                    </div>
                ))
            }

        </div>

    )
}
export default TodoComponent*/


import React from "react"
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
           data:[]
        }
    }
   addItem=()=>{
       this.setState({data:[...this.state.data,{
        title:"css",
        text:"solve css problems" 
       }]})
   }
    render(){
        console.log(this.state.data)
        return(
          
            <div>
                  <button onClick={this.addItem}> add item</button>
              {
                 this.state.data.map((item)=>(
                     <div>
                         <h2>{item.title}</h2>
                         <p>{item.text}</p>
                         </div>
                 )) 
              }
            </div>
        )
    }

}
export default TodoComponent
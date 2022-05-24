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
import CompletedItems from "./CompletedItems"
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
           data:[],
           currenttitle:"",
           currentText:"",
           id:0
        }
    }
    setId=()=>{
        this.setState({id:this.state.id+1})
    }
   addItem=()=>{
    // this.setId()
    this.setState({id:this.state.id+1})
       this.setState({data:[...this.state.data,{
        id:this.state.id,
        title:this.state.currenttitle,
        text:this.state.currentText,
        compeleted:false
       }]})
   }
   handleTitle=(ev)=>{
  
    this.setState({currenttitle:ev.target.value})
    
   }
   handleText=(ev)=>{
    this.setState({currentText:ev.target.value})
   }
   changeCompletion=(itemid)=>{
  const temp=[...this.state.data]
   const obj=temp.find((item)=>item.id===itemid)
   obj.compeleted=!obj.compeleted
   this.setState({data:temp})

  /* wrong approach coz setstate is not called -> it wont call render for the state change 
  const obj=this.state.data.find((item)=>item.id===itemid)
   obj.compeleted=true
   console.log(this.state.data)*/
   }
   deleteTask=(itemid)=>{
    const temp=[...this.state.data]
       const newState=temp.filter((item)=>item.id!==itemid)
       this.setState({data:newState})
   }
    render(){
        console.log(this.state.data)
        return(
          
            <div>
               Title: <input type='text' onChange={(e)=>this.handleTitle(e)}></input>
               Text: <input type='text' onChange={(e)=>this.handleText(e)}></input>
                  <button onClick={this.addItem}> add item</button>
                  <h2>Pending Tasks</h2>
                  {
                 this.state.data.map((item)=>(
                        item.compeleted?<></>:<div>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <button onClick={()=>this.changeCompletion(item.id)}>done</button>
                        </div>  
                 )) 
              }
            <CompletedItems data={this.state.data} deleteFun={this.deleteTask}></CompletedItems>
            </div>
        )
    }

}
export default TodoComponent
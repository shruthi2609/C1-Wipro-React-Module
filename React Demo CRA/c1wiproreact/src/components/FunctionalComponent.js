 import { useState } from "react"
 const FunctionalComponent=(props)=>{
    const [count,setCount]=useState(0) 
    const [id,setId]=useState(0)
    const [todotext,setTodoText]=useState("")
    const [data,setData]=useState([])

    addTodo=()=>{
        const obj={id:id,todotext:todotext}
        setData([...data,obj])
    }
    const increment=()=>{
        setCount(count+1)
    }
     return(
         <div>
             <h1>{props.prop1}</h1>
             <p>{count}</p>
             <button onClick={increment}>+</button>
         </div>
     )

}
export default FunctionalComponent
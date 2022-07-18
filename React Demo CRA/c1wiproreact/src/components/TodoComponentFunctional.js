import {useState,useEffect} from "react"
import axios from "axios"
import CompletedItems from "./CompletedItems"
function TodoComponentFunction(){
    const [data,setData]=useState([])
    const [currentText,setText]=useState("")
    const [currentTitle,setTitle]=useState("")
    const [id,setId]=useState(0)
    useEffect(
        ()=>{
         axios.get('http://localhost:8000/todo/get-tasks').then((res)=>setData(res.data)).catch((err)=>console.log(err))
        },[data]
    )
  const addItem=()=>{
        
     /*   setData(...data,{
            id:id,
            title:currentTitle,
            text:currentText,
            compeleted:false
           })*/
        axios.post("http://localhost:8000/todo/create", {
        title: currentTitle,
        text: currentText,
        id: parseInt(Date.now()),
        completed: false,
      }).then((res)=>setData([...data,res.data])).catch((err)=>console.log(err)) 
   }
 const  handleTitle=(ev)=>{
    setTitle(ev.target.value)
   }
   const handleText=(ev)=>{
   setText(ev.target.value)
   }
  const changeCompletion=(itemid)=>{
    axios.get(`http://localhost:8000/todo/done-task/${itemid}`).then((res)=>{
        const temp=[...data]
        const obj=temp.find((item)=>item.id===itemid)
        obj.compeleted=!obj.compeleted
        setData(temp)
    }).catch((err)=>console.log(err))
  /**/
   }
   const deleteTask=(itemid)=>{
    axios.get(`http://localhost:8000/todo/delete-task/${itemid}`).then((res)=>{
        const temp=[...data]
        const newState=temp.filter((item)=>item.id!==itemid)
        setData(temp)
    }).catch((err)=>console.log(err))
   
   }
    return(
        <div>
            <h1>Todo Manager</h1>
            Title: <input type='text' onChange={(e)=>handleTitle(e)}></input>
               Text: <input type='text' onChange={(e)=>handleText(e)}></input>
                  <button onClick={addItem}> add item</button>
                 <h2>Pending Items</h2>
                  {
            data.map((item)=>(
                <div>
                {item.completed?<></>:
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                    <button onClick={()=>changeCompletion(item.id)}>done</button>
                </div>}
                </div>
            ))
        }
             <CompletedItems data={data} deleteFun={deleteTask}></CompletedItems>  
        </div>
     
       
    )
}
export default TodoComponentFunction
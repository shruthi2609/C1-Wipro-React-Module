function CompletedItems(props){
    console.log(props)
    return(
        <div>
        <h2>Completed Tasks</h2>
            {
                props.data.map((item)=>{
                 
                    return item.completed&&<div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <button onClick={()=>props.deleteFun(item.id)}>delete</button>
                        </div>
                })
            }
        </div>
    )
}
export default CompletedItems
function CompletedItems(props){
    console.log(props.deleteFun)
    return(
        <div>
        <h2>Completed Tasks</h2>
            {
                props.data.map((item)=>{
                 
                    return item.compeleted&&<div>
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
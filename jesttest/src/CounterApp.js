import { useState } from "react"

export default function CounterApp(){
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    return(
        <div>
        <h3 data-testid="counter">{count}</h3>
        <button onClick={increment}>+</button>

        <button onClick={decrement}>-</button>
        </div>
    )
}
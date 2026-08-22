import { useState } from "react"

const Counter = () => {

    const [data , setData] = useState(0)

  return (
    <div>
        <h1>Count : {data}</h1>
        <button onClick={() => {
            setData(data + 1)
        }}>Increment</button>
        <button onClick={() => {
            setData(data - 1)
        }}>Decrement</button>
        <button onClick={() => {
            setData(0)
        }}>Reast</button>

        <button onClick={() => {
            setData(prev => prev + 5)        
            }}>+5</button>
    </div>
  )
}

export default Counter

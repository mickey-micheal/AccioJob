import { useState } from "react"


const Toggle = () => {

    const [data , setData] = useState(false)
    
  return (
    <div>
        <h1>{data ? "Hello Mickey! Welcome to React." : "Message is hidden"}</h1>

        <button onClick={() => {
            setData(!data)
        }}>{data ? "Show Massage" : "Hide Massage"}</button>
        
    </div>
  )
}

export default Toggle

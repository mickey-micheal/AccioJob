import { useState } from "react"

const Child = () => {

    const [count, setCont] = useState(0)

  return (
    <div>
        <h1>{count}</h1>

        <button 
            onClick={() => {
                setCont(count + 1)
            }}>
                +
        </button>

        <button 
            onClick={() => {
            setCont(count - 1)
            }}>
                -
        </button>

    </div>
  )
}

export default Child
import { useEffect, useState } from "react"

const EffectPractice = () => {

    const [count, setCount] = useState(0)
    const [data ,setData] = useState("")

    useEffect(() => {
        console.log("rr")
    },[count])

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => {
            setCount(count + 1)
        }}>+</button>
        <button onClick={() => {
            setData(data + "hello")
            console.log(data)
        }}>add data</button>
    </div>
  )
}

export default EffectPractice
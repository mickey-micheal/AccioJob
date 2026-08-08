import { useEffect, useState } from "react"

const Apply = () => {

    const [no , setNo] = useState(0)
    console.log(no)

    useEffect(() => {

        console.log("first")

    },[no])
    
  return (
    <div>
        <h1>{no}</h1>

        <button onClick={() => {
            setNo(no + 1)
        }}>click</button>
    </div>
  )
}

export default Apply
import { useState } from "react"
import Apply from "./Components/Apply"

function App() {

  const [data , setDta] = useState(false)

  return (

    <div className="flex gap-2">
      <h1>Mickey</h1>

      <br />

      <button onClick={() => {
      setDta(!data)
     }}>click</button>




     {data && <Apply/>}

     

    </div>
  )
}

export default App


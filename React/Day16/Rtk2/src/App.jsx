import { useRef } from "react"  
import { useSelector, useDispatch } from "react-redux"
import { addtext } from "./Utils/ListSlice"

const App = () => {

  const data = useSelector((store) => {
    return store.List
  })
  const dis = useDispatch()
  const ipref = useRef()

  return (
    <div>
      <input ref={ipref} type="text" />

      <button onClick={() => {

        if(!ipref.current.value) return 

        dis(addtext(ipref.current.value))
        ipref.current.value = ""
      }}>Add</button>

      <ul>
        {
          data.map((item,index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>

    </div>
  )
}

export default App

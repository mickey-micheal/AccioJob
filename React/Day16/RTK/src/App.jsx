import { useDispatch , useSelector } from "react-redux"
import { useRef } from "react"
import { text } from "./Utils/ListSlice"

const App = () => {

  const dis = useDispatch()

  const data = useSelector((store) => {
    return store.List
  })

  const ref = useRef()


  return (
    <div>
      <input ref={ref} type="text" />

      <button onClick={() => {

        if(!ref.current.value) return

        dis(text(ref.current.value))
        ref.current.value = ""
      }}>Add Something</button>

      <ul>
        {data.map((item, index) => {
           return  <li key={index}>{item}</li>
        })}
      </ul>
     

    </div>
  )
}

export default App
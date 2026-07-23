import { useRef } from "react"
import {useDispatch, useSelector} from "react-redux"
import {addtext} from "./Utils/listSlice"

const App = () => {

  const dispatch =  useDispatch()
  const data = useSelector(store => store.list)
  const ipref = useRef(data)
  

  return (
    <div>
      <input ref={ipref} type="text" />
      <button onClick={() => {
        dispatch(addtext(ipref.current.value))
        ipref.current.value = ""
      }}>Click</button>


      <ul>
        {data.map((item,index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>

    </div>
    
  )
}

export default App
import { useRef } from "react"
import {useDispatch} from "react-redux"
import { APPENT_LIST } from "../Utils/Store"

const Form = () => {

  const dispatch = useDispatch()
  const ref = useRef()

  return (
    <div>
        <input type="text" ref={ref} />

        <button onClick={() => {
          dispatch(APPENT_LIST(ref.current.value))
          ref.current.value = ""
        }}>Add Item</button>
        
    </div>
  )
}

export default Form

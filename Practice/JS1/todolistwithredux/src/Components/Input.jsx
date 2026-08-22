import { useRef } from "react"
import {useDispatch} from "react-redux"
import { addlist } from "../Utils/Store"

const Input = () => {

    const ipref = useRef()
    const dispatch = useDispatch()

  return (
    <div>
        <input ref={ipref} type="text" />

        <button onClick={() => {
            dispatch(addlist(ipref.current.value))
            ipref.current.value = ""
        }}>Add</button>
    </div>
  )
}

export default Input
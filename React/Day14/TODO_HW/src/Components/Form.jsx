import { useRef } from "react"
import {useDispatch} from "react-redux"
import { APPENT_LIST } from "../Utils/Store"

const Form = () => {

  const dispatch = useDispatch()
  const ref = useRef()
  const ref2 = useRef()

  return (
    <div style={{display : "flex"}}>
        <input type="text" ref={ref} />

        <textarea ref={ref2} ></textarea>

        <button onClick={() => {

          if(!ref.current.value || !ref2.current.value)
          {
            return
          }

        
          dispatch(APPENT_LIST({
            title : ref.current.value,
            disc : ref2.current.value
          }))
          ref.current.value = ""
          ref2.current.value = ""
        }}>Add Item</button>
        
    </div>
  )
}

export default Form

import { useDispatch, useSelector } from "react-redux"
import { MINUS, PLUS, REST } from "../Utils/Store"

const Counter = () => {

  const dispatch = useDispatch()
  const data = useSelector((store) => {
    return store.count.Counter
  })

  return (
    <div>
        
        <h1>{data}</h1>

        <button onClick={() => {
            dispatch(PLUS())
        }}>+</button>

        <button onClick={() => {
            dispatch(REST())
        }}>R</button>

        <button onClick={() => {
            dispatch(MINUS())
        }}>-</button>

    </div>
  )
}

export default Counter
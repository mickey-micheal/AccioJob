import {useSelector , useDispatch} from "react-redux"
import {increment,decrement,Rest} from "./Utils/CounterSlice"

const App = () => {

  const dispatch = useDispatch()

  const data = useSelector((store) => {
    return store.Counter
  })

  return (
    <div>

      <h1>{data}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>+</button>
      <button onClick={() => {
        dispatch(Rest())
      }}>R</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>-</button>
      
    </div>
  )
}

export default App
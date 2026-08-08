import {useReducer} from "react"

const initalState = 0

const Reducer = (state , action) => {
  switch(action.type)
  {
    case  "Increment" :
      return state + 1
    case  "Rest" :
      return 0
    case  "Decrement" :
      return state - 1
    default :
     return state
  }
}

const UseReducerdamo = () => {

  const [Count, dispatch] = useReducer(Reducer , initalState)
  
  return (
    <div>
      <h1>{Count}</h1>

      <div>
        <button onClick={() => {
          dispatch({
            type : "Increment"
          })
        }}>+</button>
        <button onClick={() => {
          dispatch({
            type : "Rest"
          })
        }}>R</button>
        <button onClick={() => {
          dispatch({
            type : "Decrement"
          })
        }}>-</button>
      </div>
    </div>
  )
}

export default UseReducerdamo
import { useReducer } from "react"

const initalState = {
    un : "",
    ps : "",
    em : ""
}

const Reducer = (state, action) => {
    switch(action.type)
    {
        case "USERNAME" :
            return {
                ...state,
                un : action.payload
            }
        case "PASSWORD" :
            return {
                ...state,
                ps : action.payload
            }
        case "EMAIL" :
            return {
                ...state,
                em : action.payload
            }
        default : 
        return state
    }
}

const Form = () => {

    const [data , dispatch] = useReducer(Reducer, initalState)
  return (
    <div>
        <input onChange={() => {
            dispatch({
                type : 

            })
        }}type="text" placeholder="UserName" />
        <input onChange={() => {

        }}type="text" placeholder="PassWord" />
        <input onChange={() => {

        }}type="text" placeholder="Email" />

        <button onClick={() => {

        }}>Submit</button>
    </div>
  )
}

export default Form
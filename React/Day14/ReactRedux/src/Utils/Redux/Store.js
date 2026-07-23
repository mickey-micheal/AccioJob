import  { combineReducers, createStore} from "redux"
import { icecreamReducer } from "./IceCream"
import { cakeReducer } from "./Cake"

const rootreducer = combineReducers({
    cake : cakeReducer,
    icecream : icecreamReducer
})

export const Store = createStore(rootreducer)

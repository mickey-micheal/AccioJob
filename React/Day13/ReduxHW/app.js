const {createStore} = require("redux")

const countp = "COUNT_PLUE"
const countm = "COUNT_MINUS"
const countr = "COUNT_REST"

function COUNT_PLUS()
{
    return{
        type : countp
    }
}

function COUNT_REST()
{
    return{
        type : countr
    }
}

function COUNT_MINUS()
{
    return{
        type : countm
    }
}

const initalCount = {
    Count : 0
}

const countReducer = (state = initalCount , action) => {
    switch(action.type)
    {
        case countp : 
             return {
                Count : state.Count + 1
             }
        case countr :
            return {
                Count : 0
            }
        case countm : 
             return {
                Count : state.Count - 1
             }    
        default :
             return state 
    }
}

const Store = createStore(countReducer)

Store.subscribe(() => {
    console.log(Store.getState())
})

Store.dispatch(COUNT_PLUS())
Store.dispatch(COUNT_PLUS())
Store.dispatch(COUNT_MINUS())
Store.dispatch(COUNT_REST())

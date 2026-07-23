const {createStore} = require("redux")

const countp = "COUNT_PLUE"
const countm = "COUNT_MINUS"
const countr = "COUNT_REST"

function COUNT_PLUS(q)
{
    return{
        type : countp,
        payload : q || 1
    }
}

function COUNT_REST()
{
    return{
        type : countr,
        
    }
}

function COUNT_MINUS(q)
{
    return{
        type : countm,
        payload : q || 1
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
                Count : state.Count + action.payload
             }
        case countr :
            return {
                Count : 0
            } 
        case countm : 
             return {
                Count : state.Count - action.payload
             }    
        default :
             return state 
    }
}

const Store = createStore(countReducer)

Store.subscribe(() => {
    console.log(Store.getState())
})

Store.dispatch(COUNT_PLUS(15))
Store.dispatch(COUNT_PLUS())
Store.dispatch(COUNT_MINUS(6))
Store.dispatch(COUNT_REST())

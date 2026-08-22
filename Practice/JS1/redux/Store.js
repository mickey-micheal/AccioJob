const { createStore } = require("redux") 

const INCREMENT = "increment"
const DECREMENT = "dcrement"
const REST = "rest"

function increnent(q)
{
    return {
        type : INCREMENT,
        payload : q || 1
    } 
}

function decrement(q)
{
    return {
        type : DECREMENT,
        payload : q || 1
    }
}

function rest()
{
    return {
        type : REST
    }
}

const initalcount = {
    numofcount : 0
}

const countReducer = (state = initalcount, action) => {
    switch(action.type)
    {
        case INCREMENT : 
          return {
            numofcount : state.numofcount + action.payload
          }
        case DECREMENT : 
          return {
            numofcount : state.numofcount - action.payload
          }
        case REST :
            return  {
                numofcount : 0
            }
        default :
          return state
    }
}


const Store = createStore(countReducer)

Store.subscribe(() => {
    console.log(Store.getState())
})

Store.dispatch(increnent(21))

Store.dispatch(decrement())

Store.dispatch(rest())


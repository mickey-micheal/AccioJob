const {createStore, combineReducers} = require("redux")

const buycake = "BUY_CAKE"
const restock = "RESTOCK_CAKE"
const buyic = "BUY_ICECREAM"
const restockic = "RESTOCK_ICECREAM"

function BUY_CAKE(q)
{
    return{
        type : buycake,
        payload : q || 1

    }
}

function RESTOCK_CAKE()
{
    return{
        type : restock
    }
}

function BUY_ICECREAM(q)
{
    return {
        type : buyic,
        payload : q || 1
    } 
}

function RESTOCK_ICECREAM()
{
    return {
        type : restockic
    }
}


const initalCake = {
    numofcake : 15
}

const initalicecream = {
    numoficecream : 20
}

const cakeReducer = (state = initalCake , action) => {
    switch(action.type)
    {
        case buycake : 
          if(action.payload > state.numofcake) return state
          return {
            numofcake : state.numofcake - action.payload
          }

        case restock :
            return {
                numofcake : 15
            }
        default :
          return state
    }
}

const icecreamReducer = (state = initalicecream, action) => {
    switch(action.type)
    {
        case buyic :
            if(action.payload > state.numoficecream) return state
            return {
                numoficecream : state.numoficecream - action.payload
            }
        case restockic :
            return {
                numoficecream : 20
            }
        default :
            return state
    }
}


const RootReducer = combineReducers({
    cake : cakeReducer,
    icecream : icecreamReducer
})
const Store = createStore(RootReducer)

Store.subscribe( () => {
    console.log(Store.getState())
})


Store.dispatch(BUY_CAKE())
Store.dispatch(BUY_CAKE())
Store.dispatch(BUY_CAKE())

Store.dispatch(RESTOCK_CAKE())

Store.dispatch(BUY_CAKE())
Store.dispatch(BUY_CAKE())


Store.dispatch(BUY_ICECREAM())



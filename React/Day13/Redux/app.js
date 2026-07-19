const {createStore} = require("redux")

const buycake = "BUY_CAKE"
const restock = "RESTOCK_CAKE"

function BUY_CAKE()
{
    return{
        type : buycake
    }
}

function RESTOCK_CAKE()
{
    return{
        type : restock
    }
}


const initalCake = {
    numofcake : 15
}

const cakeReducer = (state = initalCake , action) => {
    switch(action.type)
    {
        case buycake : 
          return {
            numofcake : state.numofcake - 1
          }

        case restock :
            return {
                numofcake : 15
            }
        default :
          return state
    }
}

const Store = createStore(cakeReducer)


Store.dispatch({
    type : buycake
})

console.log(Store.getState())




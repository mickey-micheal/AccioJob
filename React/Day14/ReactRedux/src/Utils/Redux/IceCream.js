const buyic = "BUY_ICECREAM"
const restockic = "RESTOCK_ICECREAM"

export function BUY_ICECREAM(q)
{
    return {
        type : buyic,
        payload : q || 1
    }
}

export function RESTOCK_ICECREAM()
{
    return {
        type : restockic
    }
}

const initalicecream = {
    numoficecream : 20
}

export const icecreamReducer = (state = initalicecream, action) => {
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

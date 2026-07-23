const buycake = "BUY_CAKE"
const restocke = "RESTOCKE_CAKE"

export function BUY_CAKE(q)
{
    return {
        type : buycake,
        payload : q || 1
    }
}

export function RESTOCKE_CAKE()
{
    return {
        type : restocke,
    }
}

const initalcake = {
    numofcake : 20
}

export const cakeReducer = (state = initalcake, action) => {
    switch(action.type)
    {
        case buycake :
            if(action.payload > state.numofcake) return state
            return {
                numofcake : state.numofcake - action.payload
            }
        case restocke :
            return {    
                numofcake : 20
            }
        default :
            return state
    }
}

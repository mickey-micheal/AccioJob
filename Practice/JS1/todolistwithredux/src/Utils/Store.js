import { createStore } from "redux"

export const ADD_LIST = "addlist"

export function addlist(d)
{
    return {
        type : ADD_LIST,
        payload : d
    }
}

const initallist = {
    data : []
}

export const listReducer = (state = initallist, action) => {
    switch(action.type)
    {
        case ADD_LIST: 
          return {
            ...state,
            data : [...state.data, action.payload]
          }
        default : 
            return state
    }
}

export const Store = createStore(listReducer)
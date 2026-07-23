import {createStore } from "redux"

const lista = "APPENT_LIST"

export function APPENT_LIST(q)
{
    return {
        type : lista,
        payload : q
    }
}

const initallist = []

const listReducer = (state = initallist, action) => {
    switch(action.type)
    {
        case lista :
            return [...state, action.payload]
        default :
            return state
    }
}

export const Store = createStore(listReducer)

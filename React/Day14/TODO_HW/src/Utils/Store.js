import {combineReducers, createStore } from "redux"

const lista = "APPENT_LIST"
const plus = "PLUS"
const rest = "REST"
const minus = "MINUS"

export function APPENT_LIST(q)
{
    return {
        type : lista,
        payload : q
    }
}

export function PLUS(q)
{
    return{
        type : plus,
        payload : q || 1
    }
}

export function REST()
{
    return{
        type : rest
    }
}

export function MINUS(q)
{
    return{
        type : minus,
        payload : q || 1
    }
}

const initallist = {
    data : []
}

const initalcounet = {
    Counter : 0
}

const listReducer = (state = initallist, action) => {
    switch(action.type)
    {
        case lista :
            return {
                data : [...state.data, action.payload]
            }
        default :
            return state
    }
}

const counterReducer = (state = initalcounet, action) => {
    switch(action.type)
    {
        case plus :
            return {
                Counter : state.Counter + action.payload
            }
         case minus :
            return {
                Counter : state.Counter - action.payload
            }
        case rest :
            return {
                Counter : 0
            }    
        
        default : 
            return state
    }
}

const rootReducer = combineReducers({
    count : counterReducer,
    list : listReducer
})

export const Store = createStore(rootReducer)

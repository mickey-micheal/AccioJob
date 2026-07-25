import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name : "MyCounter",
    initialState : 0,
    reducers : {
        increment : (state, action) => {
            return state + 1
        },
        decrement : (state, action) => {
            return state - 1
        },
        Rest : (state, action) => {
            return 0
        }
    }
})

export default CounterSlice.reducer
export const {increment,decrement,Rest} = CounterSlice.actions
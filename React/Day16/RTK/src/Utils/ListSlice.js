import { createSlice } from "@reduxjs/toolkit";


const ListSlice = createSlice({
    name : "text",
    initalState : [],
    reducers : {
        text : (state , action) => {
            return [...state , action.payload]
        }
    }
})

export default ListSlice.reducer
export const { text } = ListSlice.actions
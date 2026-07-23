import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name : "text",
    initialState : [],
    reducers : {
        addtext : (state , action) => {
            return [...state, action.payload]
        }
    }
})

export default listSlice.reducer
export const {addtext} = listSlice.actions

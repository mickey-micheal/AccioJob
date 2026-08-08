import { createSlice } from "@reduxjs/toolkit";

const ListSliceReducer = createSlice({
    name : "MyList",
    initialState : [],
    reducers : {
        text : (state, action) => {
            return [...state , action.payload]
        }
    }
})

export default ListSliceReducer.reducer
export const { text } = ListSliceReducer.actions

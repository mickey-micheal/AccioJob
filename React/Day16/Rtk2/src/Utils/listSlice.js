import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
    name : "MyList",
    initialState : [],
    reducers : {
        addtext : (state, action) => {
            return [...state , action.payload]
        }
    }
})

export default ListSlice.reducer
export const {addtext} = ListSlice.actions

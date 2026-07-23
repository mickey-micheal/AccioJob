import {configureStore} from "@reduxjs/toolkit"
import listSlice from "./listSlice"

export const Store = configureStore({
    reducer : {
        list : listSlice
    }
})
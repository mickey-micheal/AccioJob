import {configureStore} from "@reduxjs/toolkit"
import ListSlice from "./ListSlice"

export const Store = configureStore({
    reducer : {
        List : ListSlice
    }
})

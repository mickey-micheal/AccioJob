import {configureStore} from "@reduxjs/toolkit"
import FavSlice from "./FavSlice"

const Store = configureStore({
    reducer : {
        Favourite : FavSlice
    }
})

export default Store
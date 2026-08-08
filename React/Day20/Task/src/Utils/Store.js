import { configureStore } from "@reduxjs/toolkit"
import FriendSlice from "./FriendSlice"


const Store = configureStore({
    reducer :{
        Friend : FriendSlice
    }
})

export default Store
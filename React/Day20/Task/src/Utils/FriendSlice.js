import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit"


export const get = createAsyncThunk("get", async (_, { rejectWithValue }) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/")
        const data = await res.json()

        return data

    } catch (error) {
        return rejectWithValue(error.message)
    }

})

const FriendSlice = createSlice({
    name : "Friends",
    initialState : {
        loading : false,
        data : [],
        erorr : null,
        fri : []
    },
    reducers : {
        addfri : (state, action) => {
            let flag = state.fri.find((item) => {
                return item.id == action.payload.id
            })
            if(!flag)
            {
                state.fri.push(action.payload)
            }
        },
        blockfri : (state, action) => {
            state.fri = state.fri.filter((item) => item.id !== action.payload)
            
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(get.pending, (state) => {
            return {
                ...state,
                loading : true
            }
        })
        .addCase(get.fulfilled, (state, action) => {
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        })
        .addCase(get.rejected, (state, action) => {
            return {
                loading : false,
                data : [],
                erorr : action.payload
            }
        })

    }
})

export default FriendSlice.reducer
export const { addfri, blockfri } = FriendSlice.actions

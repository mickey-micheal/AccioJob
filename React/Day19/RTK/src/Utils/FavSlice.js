import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const aa = createAsyncThunk("products",async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json();

      return data.products

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const FavSlice = createSlice({
  name: "Mickey",
  initialState: {
    loading: false,
    data: [],
    error: null,
    fav: [],
  },

  reducers: {
    addfav: (state, action) => {
      let flag = state.fav.find((item) => {
        return item.id == action.payload.id
      })
      if(!flag)
      {
        state.fav.push(action.payload)
      }
    },
    remfav: (state, action) => {
      state.fav = state.fav.filter(
        (item) => item.id !== action.payload.id
      )
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(aa.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(aa.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(aa.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addfav, remfav } = FavSlice.actions;
export default FavSlice.reducer;
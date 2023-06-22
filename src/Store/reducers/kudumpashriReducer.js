import { createSlice } from "@reduxjs/toolkit";
import { createkudumpashriApi } from "../api/kudumpashri";

// const INITIAL_STATE = {
//     products: [],
//     productDetail:{},

//     loading: false,
// }
const INITIAL_STATE = {
  loading: false,
  error: {},
  states: [],
  // user: {
  //   email: "",
  //   username: "",

  //   isActive: false,
  // },
};
const kudumpashriSlice = createSlice({
  name: "kudumpashri",
  initialState: INITIAL_STATE,

  reducers: {},
  extraReducers: {
    //createProduct
    [createkudumpashriApi.pending]: (state, action) => {
      state.loading = true;
    },
    [createkudumpashriApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.states = action.payload;
      state.error = {};
    },
    [createkudumpashriApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const {} = kudumpashriSlice.actions;

export default kudumpashriSlice.reducer;

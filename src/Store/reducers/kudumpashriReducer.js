import { createSlice } from "@reduxjs/toolkit";
import {
  UpdatekudApi,
  createkudumpashriApi,
  deletekudApi,
  singleViewApi,
} from "../api/kudumpashri";
import { allListkudumpashriApi } from "../api/kudumpashri";

// const INITIAL_STATE = {
//     products: [],
//     productDetail:{},

//     loading: false,
// }
const INITIAL_STATE = {
  loading: false,
  error: {},
  kudumpashries: [],
  Singleview: {},
  Updatekud: {},
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
    [createkudumpashriApi.pending]: (state) => {
      state.loading = true;
    },
    [createkudumpashriApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.kudumpashries = action.payload;
      state.error = {};
    },
    [createkudumpashriApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    //allListProduct
    [allListkudumpashriApi.pending]: (state) => {
      state.loading = true;
    },
    [allListkudumpashriApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.kudumpashries = action.payload;
      state.error = {};
    },
    [allListkudumpashriApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    // SingleView
    [singleViewApi.pending]: (state) => {
      state.loading = true;
    },
    [singleViewApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.Singleview = action.payload;
      state.error = {};
    },
    [singleViewApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    // DeleteView
    [deletekudApi.pending]: (state) => {
      state.loading = true;
    },
    [deletekudApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.kudumpashries = action.payload;
      state.error = {};
    },
    [deletekudApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    // UpdateView
    [UpdatekudApi.pending]: (state) => {
      state.loading = true;
    },
    [UpdatekudApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.kudumpashries = action.payload;
      state.error = {};
    },
    [UpdatekudApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const {} = kudumpashriSlice.actions;

export default kudumpashriSlice.reducer;

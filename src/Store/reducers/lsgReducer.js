import { createSlice } from "@reduxjs/toolkit";
import {
  lgsdistrictApi,
  lgsconstituencyApi,
  lgsPanchayathApi,
} from "../api/lgs";

// const INITIAL_STATE = {
//     products: [],
//     productDetail:{},

//     loading: false,
// }
const INITIAL_STATE = {
  loading: false,
  error: {},
  districts: [],
  panchayats: [],
  constituencys: [],

  // user: {
  //   email: "",
  //   username: "",

  //   isActive: false,
  // },
};
const lgsSlice = createSlice({
  name: "lgs",
  initialState: INITIAL_STATE,

  reducers: {},
  extraReducers: {
    //createProduct
    // distrct

    [lgsdistrictApi.pending]: (state) => {
      state.loading = true;
    },
    [lgsdistrictApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.districts = action.payload;
      state.error = action.error;
    },
    [lgsdistrictApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [lgsconstituencyApi.pending]: (state) => {
      state.loading = true;
    },
    [lgsconstituencyApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.constituencys = action.payload;
      state.error = action.error;
    },
    [lgsconstituencyApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [lgsPanchayathApi.pending]: (state) => {
      state.loading = true;
    },
    [lgsPanchayathApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.panchayats = action.payload;
      state.error = action.error;
    },
    [lgsPanchayathApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const {} = lgsSlice.actions;

export default lgsSlice.reducer;

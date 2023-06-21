import { createSlice } from "@reduxjs/toolkit";
import {  createkudumpashriApi } from "../api/kudumpashri";


// const INITIAL_STATE = {
//     products: [],
//     productDetail:{},
   
//     loading: false,
// }
const INITIAL_STATE =  {
    loading: false,
    error: {},
    // user: {
    //   email: "",
    //   username: "",
    
    //   isActive: false,
    // },
  }
const lgsSlice = createSlice({
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
            
        },
        [createkudumpashriApi.rejected]: (state, action) => {
            state.loading = false;
        },

       
    }
});

export const { } = lgsSlice.actions;

export default lgsSlice.reducer;
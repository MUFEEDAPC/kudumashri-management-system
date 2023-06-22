import { createSlice } from "@reduxjs/toolkit";
import { lgsConstituencyApi, lgsDistrictApi, lgsPanchayathApi } from "../api/lgs";


// const INITIAL_STATE = {
//     products: [],
//     productDetail:{},
   
//     loading: false,
// }
const INITIAL_STATE =  {
    loading: false,
    
    error: {},
    panchayaths:[],
   districts:[],
   constituencys:[],
  }
const lgsSlice = createSlice({
    name: "lsg",
    initialState: INITIAL_STATE,
    
    reducers: {},
    extraReducers: {


        //lgsPanchayathApi
        [lgsPanchayathApi.pending]: (state) => {
            state.loading = true;
        },
        [lgsPanchayathApi.fulfilled]: (state, action) => {
            state.panchayaths = action.payload;
            state.loading = false;
            state.error = {};
            
        },
        [lgsPanchayathApi.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.error;
        },
         //lgsDistrictsApi
         [lgsDistrictApi.pending]: (state) => {
            state.loading = true;
        },
        [lgsDistrictApi.fulfilled]: (state, action) => {
            state.districts = action.payload;
            state.loading = false;
            state.error = {};
            
        },
        [lgsDistrictApi.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.error;
        },
           //lgsconstituencyApi
           [lgsConstituencyApi.pending]: (state) => {
            state.loading = true;
        },
        [lgsConstituencyApi.fulfilled]: (state, action) => {
            state.constituencys = action.payload;
            state.loading = false;
            state.error = {};
            
        },
        [lgsConstituencyApi.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.error;
        },


       }
});

export const { } = lgsSlice.actions;

export default lgsSlice.reducer;
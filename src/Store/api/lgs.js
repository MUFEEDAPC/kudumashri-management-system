import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "../BaseURL/BaseURL";

// export const lgsPanchayathApi = createAsyncThunk(
//     "/api/admin/lsg/panchayat/",
//     async () => {
//         const response = await post("/api/admin/lsg/panchayat/");
       
//         return response.data;
//     }
//   );

// panchayath
  export const lgsPanchayathApi = createAsyncThunk(
    "/api/admin/lsg/panchayat/",
    async () => {
      try {
        const response = await get("/api/admin/lsg/panchayat/");
        if (response?.isSuccess) {
       
          return response;
        }
  
        
      } catch (error) {
        
        throw error?.response?.data?.error;
      }
    }
  );
  // district
  export const lgsDistrictApi = createAsyncThunk(
    "/api/admin/lsg/district/",
    async () => {
      try {
        const response = await post("/api/admin/lsg/district/");
        if (response?.isSuccess) {
       
          return response?.data;
        }
  
        
      } catch (error) {
        
        throw error?.response?.data?.error;
      }
    }
  );
  // constituency
  export const lgsConstituencyApi = createAsyncThunk(
    "/api/admin/lsg/constituency/",
    async () => {
      try {
        const response = await post("/api/admin/lsg/constituency/");
        if (response?.isSuccess) {
       
          return response?.data;
        }
  
        
      } catch (error) {
        
        throw error?.response?.data?.error;
      }
    }
  );
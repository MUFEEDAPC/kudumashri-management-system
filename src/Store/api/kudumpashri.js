
import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../BaseURL/BaseURL";

// export const createkudumpashriApi = createAsyncThunk(
//     "/api/admin/kudumbashree",
//     async ({ state, navigate }) => {
//         const response = await post("/api/admin/kudumbashree", state);
//         navigate("/all-products")
//         return response.data;
//     }
//   );

  export const createkudumpashriApi = createAsyncThunk(
    "/api/admin/kudumbashree",
    async ({ state, navigate }) => {
      try {
        const response = await post("/api/admin/kudumbashree", state);
        if (response?.isSuccess) {
       
          navigate("/all-products");
          return response?.data;
        }
  
        
      } catch (error) {
        
        throw error?.response?.data?.error;
      }
    }
  );


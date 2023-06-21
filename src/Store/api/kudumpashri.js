
import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../BaseURL/BaseURL";

export const createkudumpashriApi = createAsyncThunk(
    "/api/admin/kudumbashree",
    async ({ state, navigate }) => {
        const response = await post("/api/admin/kudumbashree", state);
        navigate("/all-products")
        return response.data;
    }
  );



//   export const createProduct = createAsyncThunk(
//     "product/createProduct", async (data) => {
//         const response = await axiosApi.post('/product/new',data.createData);
//         data.navigate("/all-products")
//         return response.data;
//     })

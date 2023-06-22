import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../BaseURL/BaseURL";

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
      // dispatch(activeSnack({ type: 'error', message: error?.response?.data?.error }));
      throw error?.response?.data?.error;
    }
  }
);

//   export const createProduct = createAsyncThunk(
//     "product/createProduct", async (data) => {
//         const response = await axiosApi.post('/product/new',data.createData);
//         data.navigate("/all-products")
//         return response.data;
//     })

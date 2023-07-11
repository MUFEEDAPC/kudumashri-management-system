import { createAsyncThunk } from "@reduxjs/toolkit";
import { post, get } from "../BaseURL/BaseURL";
// create api
export const createkudumpashriApi = createAsyncThunk(
  "/api/admin/kudumbashree",
  async ({ state, navigate }) => {
    try {
      const response = await post("/api/admin/kudumbashree", state);
      if (response?.isSuccess) {
        navigate("/AllList");
        return response?.data;
      }
    } catch (error) {
      // dispatch(activeSnack({ type: 'error', message: error?.response?.data?.error }));
      throw error?.response?.data?.error;
    }
  }
);
// All List Api
export const allListkudumpashriApi = createAsyncThunk(
  "/api/admin/kudumbashree",
  async () => {
    try {
      const response = await get("/api/admin/kudumbashree");
      if (response?.isSuccess) {
        return response;
      }
    } catch (error) {
      // dispatch(activeSnack({ type: 'error', message: error?.response?.data?.error }));
      throw error?.response?.data?.error;
    }
  }
);

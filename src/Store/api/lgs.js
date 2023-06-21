import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../BaseURL/BaseURL";

export const lgsPanchayathApi = createAsyncThunk(
    "/api/admin/lsg/panchayat/",
    async ({ state, navigate }) => {
        const response = await post("/api/admin/lsg/panchayat/", state);
        navigate("/all-products")
        return response.data;
    }
  );


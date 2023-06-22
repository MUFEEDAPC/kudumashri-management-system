import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../BaseURL/BaseURL";

// for district selection
export const lgsdistrictApi = createAsyncThunk(
  "/api/admin/lsg/district/",
  async () => {
    try {
      const response = await get("/api/admin/lsg/district/");
      if (response?.isSuccess) {
        return response;
      }
    } catch (error) {
      throw error?.response?.data?.error;
    }
  }
);
// for constituency selection
export const lgsconstituencyApi = createAsyncThunk(
  "/api/admin/lsg/constituency/",
  async () => {
    try {
      const response = await get("/api/admin/lsg/constituency/");
      if (response?.isSuccess) {
        return response;
      }
    } catch (error) {
      throw error?.response?.data?.error;
    }
  }
);
// for punchyath
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

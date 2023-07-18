import { createAsyncThunk } from "@reduxjs/toolkit";
import { post, get, del, ApiPut } from "../BaseURL/BaseURL";
import { Navigate } from "react-router-dom";
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
// Single View
export const singleViewApi = createAsyncThunk(
  "/api/admin/kudumbashree/ ",
  async (kudId) => {
    try {
      const response = await get(`/api/admin/kudumbashree/${kudId}`);
      if (response?.isSuccess) {
        return response;
      }
    } catch (error) {
      // dispatch(activeSnack({ type: 'error', message: error?.response?.data?.error }));
      throw error?.response?.data?.error;
    }
  }
);
// Delete data
export const deletekudApi = createAsyncThunk(
  "/api/admin/kudumbashree",
  async ({ kudId, navigate }) => {
    try {
      const response = await del(`/api/admin/kudumbashree/${kudId}`);
      if (response?.isSuccess) {
        navigate("/AllList");
        return response;
      }
    } catch (error) {
      // dispatch(activeSnack({ type: 'error', message: error?.response?.data?.error }));
      throw error?.response?.data?.error;
    }
  }
);
// Update data
export const UpdatekudApi = createAsyncThunk(
  "/api/admin/kudumbashree",
  async ({ id, state, navigate }) => {
    try {
      const response = await ApiPut(`/api/admin/kudumbashree/${id}`, state);
      if (response?.isSuccess) {
        console.log(response);
        navigate(`/AllList/${id}`);
        return response;
      }
    } catch (error) {
      // dispatch(activeSnack({ type: 'error', message: error?.response?.data?.error }));
      throw error?.response?.data?.error;
    }
  }
);

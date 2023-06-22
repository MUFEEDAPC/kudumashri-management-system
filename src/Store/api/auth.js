import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../BaseURL/BaseURL";
// import { useSetRoles, useSetToken } from "components/useHandleSessions";
// import { useSetRole, useSetRoles, useSetToken } from '../../hooks/useHandleSessions';
// import { activeSnack } from '../store/common';
// import { post } from "store/BaseURL/baseUrl";

export const loginApi = createAsyncThunk(
  "api/auth/login",
  async ({ state, navigate }) => {
    try {
      const response = await post("/api/auth/login", state);
      if (response?.isSuccess && response?.token) {
        //   dispatch(activeSnack({ type: 'success', message: response.message }));
        // useSetToken(response?.token);
        // useSetRoles(response?.user?.roles);
        localStorage.setItem("token", response?.token);
        localStorage.setItem("role", response?.user?.role);
        //   useSetRole(response?.user?.roles[0]);
        navigate("/Dashboard");
        return response?.user;
      }

      // return dispatch(activeSnack({ type: 'error', message: 'something went wrong' }));
    } catch (error) {
      // dispatch(activeSnack({ type: 'error', message: error?.response?.data?.error }));
      throw error?.response?.data?.error;
    }
  }
);

export const logoutApi = createAsyncThunk(
  "api/auth/logout",
  async ({ navigate }) => {
    try {
      const response = await post("/api/auth/logout");
      if (response?.isSuccess) {
        localStorage.clear();
        // dispatch(activeSnack({ type: 'success', message: response?.message }));
        navigate("/", { replace: true });
        return response;
      }
      //   return dispatch(activeSnack({ type: 'error', message: 'something went wrong' }));
    } catch (error) {
      localStorage.clear();
      navigate("/Dashboard", { replace: true });
      //   dispatch(activeSnack({ type: 'error', message: error?.response?.data?.error }));
      throw error?.response?.data?.error;
    }
  }
);
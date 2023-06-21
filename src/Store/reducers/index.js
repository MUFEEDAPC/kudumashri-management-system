// third-party
import { combineReducers } from "redux";

// project import
import menu from "./menu";
import authSlice from "./authReducer";
// import { adminSlice } from "./adminReducer";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  authSlice,
  // adminSlice,
});

export default reducers;

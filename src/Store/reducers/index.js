// third-party
import { combineReducers } from "redux";

// project import
import menu from "./menu";
import authSlice from "./authReducer";
import kudumpashriSlice from "./kudumpashriReducer"
import lgsSlice from "./lsgReducer"

// import { adminSlice } from "./adminReducer";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  authSlice,
  kudumpashriSlice,
  lgsSlice,

});

export default reducers;

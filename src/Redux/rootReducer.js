import { combineReducers } from "@reduxjs/toolkit";
import { homeReducer } from "../Store/Home/homeSlice";


export default combineReducers({
  home: homeReducer
});

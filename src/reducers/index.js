import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { loggedReducer } from "./loggedReducer";

export const allReducer = combineReducers({
  counterReducer,
  loggedReducer,
});

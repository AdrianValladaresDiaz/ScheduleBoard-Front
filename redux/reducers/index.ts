import { combineReducers } from "redux";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  project: projectReducer,
});

export default rootReducer;

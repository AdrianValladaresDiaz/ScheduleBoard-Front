import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import userProjectsReducer from "./userProjectsReducer";

const rootReducer = combineReducers({
  project: projectReducer,
  userProjects: userProjectsReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import userProjectsReducer from "./userProjectsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  project: projectReducer,
  userProjects: userProjectsReducer,
  userInfo: userReducer,
});

export default rootReducer;

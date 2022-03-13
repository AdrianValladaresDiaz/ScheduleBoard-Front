import type {
  defaultAction,
  loadProjectAction,
  Project,
} from "../../interfaces";
import actionTypes from "../actions/actionTypes";

const emptyProject: Project = {
  _id: "",
  dueDate: new Date(2009),
  taskLists: [],
  title: "empty project",
  users: [],
};

const projectReducer = (
  currentProject: Project = emptyProject,
  action: defaultAction | loadProjectAction = { type: "" }
): Project => {
  let projectState: Project;

  switch (action.type) {
    case actionTypes.loadProject:
      projectState = { ...(action as loadProjectAction).project };
      break;
    default:
      projectState = emptyProject;
  }
  return projectState;
};

export default projectReducer;

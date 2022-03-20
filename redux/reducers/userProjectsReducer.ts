import { AnyAction } from "redux";
import type { ProjectInfo } from "../../interfaces";
import {
  addUserProjectAction,
  loadUserProjectsAction,
} from "../../interfaces/actionInterfaces";
import actionTypes from "../actions/actionTypes";

const userProjectsReducer = (
  projects: ProjectInfo[] = [],
  action: AnyAction | loadUserProjectsAction | addUserProjectAction = {
    type: "",
  }
): ProjectInfo[] => {
  let updatedProjects: ProjectInfo[];

  switch (action.type) {
    case actionTypes.loadUserProjects:
      updatedProjects = [...(action as loadUserProjectsAction).projects];
      break;

    case actionTypes.addUserProject:
      updatedProjects = [...projects, (action as addUserProjectAction).project];
      break;

    default:
      updatedProjects = [...projects];
  }

  return updatedProjects;
};

export default userProjectsReducer;

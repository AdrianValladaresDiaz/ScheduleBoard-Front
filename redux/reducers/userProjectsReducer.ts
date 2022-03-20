import { AnyAction } from "redux";
import type { ProjectInfo } from "../../interfaces";
import { loadUserProjectsAction } from "../../interfaces/actionInterfaces";
import actionTypes from "../actions/actionTypes";

const userProjectsReducer = (
  projects: ProjectInfo[] = [],
  action: AnyAction | loadUserProjectsAction = { type: "" }
): ProjectInfo[] => {
  let updatedProjects: ProjectInfo[];

  switch (action.type) {
    case actionTypes.loadUserProjects:
      updatedProjects = [...action.projects];
      break;

    default:
      updatedProjects = [...projects];
  }

  return updatedProjects;
};

export default userProjectsReducer;

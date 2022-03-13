import { Project } from "../../interfaces";
import actionTypes from "./actionTypes";

export const loadProjectAction = (project: Project) => ({
  type: actionTypes.loadProject,
  project,
});

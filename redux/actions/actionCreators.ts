import { Project, Task } from "../../interfaces";
import {
  createTaskAction as IcreateTaskAction,
  deleteTaskAction as IDeleteTaskAction,
} from "../../interfaces/actionInterfaces";
import actionTypes from "./actionTypes";

export const loadProjectAction = (project: Project) => ({
  type: actionTypes.loadProject,
  project,
});

export const deleteTaskAction = (taskId: string): IDeleteTaskAction => ({
  type: actionTypes.deleteTask,
  taskId,
});

export const createTaskAction = (task: Task): IcreateTaskAction => ({
  type: actionTypes.createTask,
  task,
});

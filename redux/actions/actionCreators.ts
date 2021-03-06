import { Project, ProjectInfo, Task, UserInfo } from "../../interfaces";
import {
  createTaskAction as IcreateTaskAction,
  deleteTaskAction as IDeleteTaskAction,
} from "../../interfaces/actionInterfaces";
import { TaskList } from "../../interfaces/objectInterfaces";
import actionTypes from "./actionTypes";

export const loadProjectAction = (project: Project) => ({
  type: actionTypes.loadProject,
  project,
});

export const deleteTaskAction = (taskId: string): IDeleteTaskAction => ({
  type: actionTypes.deleteTask,
  taskId,
});

export const createTaskAction = (
  task: Task,
  taskListId: string
): IcreateTaskAction => ({
  type: actionTypes.createTask,
  task,
  taskListId,
});

export const loadUserProjectsAction = (projects: ProjectInfo[]) => ({
  type: actionTypes.loadUserProjects,
  projects,
});

export const addUserProjectAction = (project: ProjectInfo) => ({
  type: actionTypes.addUserProject,
  project,
});

export const addTaskListAction = (taskList: TaskList) => ({
  type: actionTypes.addTaskList,
  taskList,
});

export const loadUserInfoAction = (userInfo: UserInfo) => ({
  type: actionTypes.loadUserInfo,
  userInfo,
});

export const removeUserInfoAction = () => ({
  type: actionTypes.removeUserInfo,
});

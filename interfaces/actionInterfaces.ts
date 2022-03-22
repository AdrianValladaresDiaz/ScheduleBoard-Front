import { AnyAction } from "redux";
import type { Project } from "./index";
import { ProjectInfo, Task, TaskList, UserInfo } from "./objectInterfaces";

export interface loadProjectAction {
  type: string;
  project: Project;
}
export interface deleteTaskAction {
  type: string;
  taskId: string;
}

export interface createTaskAction {
  type: string;
  task: Task;
  taskListId: string;
}

export interface loadUserProjectsAction {
  type: string;
  projects: ProjectInfo[];
}

export interface addUserProjectAction {
  type: string;
  project: ProjectInfo;
}

export interface addTaskListAction extends AnyAction {
  taskList: TaskList;
}

export interface loadUserInfoAction extends AnyAction {
  userInfo: UserInfo;
}

export interface removeUserInfoAction extends AnyAction {}

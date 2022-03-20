import type { Project } from "./index";
import { ProjectInfo, Task } from "./objectInterfaces";

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

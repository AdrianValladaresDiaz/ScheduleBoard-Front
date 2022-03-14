import type { Project } from "./index";
import { Task } from "./objectInterfaces";

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
}

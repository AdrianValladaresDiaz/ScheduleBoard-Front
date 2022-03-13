import type { Project } from "./index";

export interface loadProjectAction {
  type: string;
  project: Project;
}
export interface deleteTaskAction {
  type: string;
  taskId: string;
}

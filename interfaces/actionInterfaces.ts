import type { Project } from "./index";

export interface defaultAction {
  type: string;
}

export interface loadProjectAction {
  type: string;
  project: Project;
}

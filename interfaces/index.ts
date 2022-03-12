export interface Task {
  title: string;
  description: string;
  workHours: number;
  dueDate: Date;
  assignedTo: string[];
  _id: string;
}

export interface TaskList {
  _id: string;
  title: string;
  tasks: Task[];
}

export interface Project {
  title: string;
  dueDate: Date;
  users: string;
  taskLists: TaskList[];
  _id: string;
}

export interface AxiosUserProjectsGetResponse {
  error: boolean;
  message: Project[];
}

export interface AxiosProjectGetResponse {
  error: boolean;
  message: Project;
}

export interface AxiosPingResponse {
  error: boolean;
  message: string;
}

export interface ScheduleBoardResponse {
  error: boolean;
  message: any;
}

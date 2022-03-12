export interface TaskInterface {
  title: string;
  description: string;
  workHours: number;
  dueDate: Date;
  assignedTo: string[];
}

export interface TaskListInterface {
  title: string;
  tasks: TaskInterface[];
}

export interface ProjectInterface {
  title: string;
  dueDate: Date;
  users: string;
  taskLists: TaskListInterface[];
}

export interface AxiosUserProjectsGetResponseInterface {
  error: boolean;
  message: ProjectInterface[];
}

export interface AxiosProjectGetResponseInterface {
  error: boolean;
  message: ProjectInterface;
}

export interface AxiosPingResponseInterface {
  error: boolean;
  message: string;
}

export interface ScheduleBoardResponse {
  error: boolean;
  message: any;
}

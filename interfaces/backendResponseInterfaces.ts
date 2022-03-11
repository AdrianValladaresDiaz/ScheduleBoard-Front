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

export interface AxiosUserProjectsGetResponseInterface {
  error: boolean;
  message: {
    title: string;
    dueDate: Date;
    users: string;
    taskLists: TaskListInterface[];
  }[];
}

export interface AxiosPingResponseInterface {
  error: boolean;
  message: string;
}

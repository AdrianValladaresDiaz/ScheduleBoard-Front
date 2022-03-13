export interface Task {
  title: string;
  description: string;
  workHours: number;
  dueDate: Date;
  assignedTo: string[];
  _id: string;
}

export interface ITaskList {
  _id: string;
  title: string;
  tasks: Task[];
}

export interface ProjectInfo {
  title: string;
  dueDate: Date;
  users: any[];
  taskLists: ITaskList[];
  _id: string;
}

export interface Project {
  title: string;
  dueDate: Date;
  users: string[];
  taskLists: ITaskList[];
  _id: string;
}

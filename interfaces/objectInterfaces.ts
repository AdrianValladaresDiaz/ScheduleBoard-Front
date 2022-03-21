export interface Task {
  title: string;
  description: string;
  workHours: number;
  dueDate: Date;
  assignedTo: string[];
  id: string;
}

export interface TaskList {
  id: string;
  title: string;
  tasks: Task[];
}

export interface ProjectInfo {
  title: string;
  dueDate: Date;
  users: any[];
  id: string;
}

export interface Project {
  title: string;
  dueDate: Date;
  users: string[];
  taskLists: TaskList[];
  id: string;
}

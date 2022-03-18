import { AnyAction } from "redux";
import type { ITaskList, loadProjectAction, Project } from "../../interfaces";
import {
  createTaskAction,
  deleteTaskAction,
} from "../../interfaces/actionInterfaces";
import actionTypes from "../actions/actionTypes";

const emptyProject: Project = {
  id: "",
  dueDate: new Date(2009),
  taskLists: [],
  title: "empty project",
  users: [],
};

const projectReducer = (
  currentProject: Project = emptyProject,
  action: AnyAction | loadProjectAction | deleteTaskAction = { type: "" }
): Project => {
  let projectState: Project;

  switch (action.type) {
    case actionTypes.loadProject:
      projectState = { ...(action as loadProjectAction).project };
      break;

    case actionTypes.deleteTask:
      const id = (action as deleteTaskAction).taskId;
      const newState = { ...currentProject };

      newState.taskLists.forEach((taskList, index, taskLists) => {
        const newTaskList = { ...taskList };
        const newTasks = newTaskList.tasks.filter((task) => task.id !== id);
        newTaskList.tasks = newTasks;
        taskLists[index] = newTaskList;
      });
      projectState = { ...newState };
      break;

    case actionTypes.createTask:
      const newTaskState = { ...currentProject };
      const taskListId = (action as createTaskAction).taskListId;
      const newTask = (action as createTaskAction).task;

      const updatedTaskList = newTaskState.taskLists.find(
        (taskList) => taskList.id === taskListId
      ) as ITaskList;
      updatedTaskList.tasks.push(newTask);

      projectState = { ...newTaskState };
      break;

    default:
      projectState = emptyProject;
  }

  return projectState;
};

export default projectReducer;

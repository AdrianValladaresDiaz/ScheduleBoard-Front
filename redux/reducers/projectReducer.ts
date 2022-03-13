import { AnyAction } from "redux";
import type { loadProjectAction, Project } from "../../interfaces";
import { deleteTaskAction } from "../../interfaces/actionInterfaces";
import actionTypes from "../actions/actionTypes";

const emptyProject: Project = {
  _id: "",
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
        const newTasks = newTaskList.tasks.filter((task) => task._id !== id);
        newTaskList.tasks = newTasks;
        taskLists[index] = newTaskList;
      });
      projectState = { ...newState };
      break;

    default:
      projectState = emptyProject;
  }

  return projectState;
};

export default projectReducer;

import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  addTaskListAction as IaddTaskListAction,
  createTaskAction as IcreateTaskAction,
  deleteTaskAction as IDeleteTaskAction,
} from "../../interfaces/actionInterfaces";
import axios from "axios";
import { ScheduleBoardResponse } from "../../interfaces";
import {
  addTaskListAction,
  createTaskAction,
  deleteTaskAction,
} from "../actions/actionCreators";
import { TaskList } from "../../interfaces/objectInterfaces";

export const deleteTaskThunk =
  (
    taskId: string,
    projectId: string
  ): ThunkAction<void, RootState, unknown, IDeleteTaskAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, IDeleteTaskAction>) => {
    let response: ScheduleBoardResponse;
    try {
      const axiosResponse = await axios.delete<ScheduleBoardResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND}deleteTask`,
        { params: { taskId, projectId } }
      );
      response = axiosResponse.data;
    } catch {
      response = {
        error: true,
        message: "something went wrong",
      };
    }
    if (!response.error) {
      dispatch(deleteTaskAction(taskId));
    }
  };

export const createTaskThunk =
  (
    projectId: string,
    taskListId: string,
    taskTitle: string
  ): ThunkAction<void, RootState, unknown, IcreateTaskAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, IcreateTaskAction>) => {
    let response: ScheduleBoardResponse;
    try {
      const axiosResponse = await axios.post<ScheduleBoardResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND}createTask`,
        null,
        { params: { projectId, taskListId, taskTitle } }
      );
      response = axiosResponse.data;
    } catch {
      response = {
        error: true,
        message: "something went wrong",
      };
    }
    if (!response.error) {
      dispatch(createTaskAction(response.message, taskListId));
    }
  };

export const addTaskListThunk =
  (title: string, token: string, projectId: string) =>
  async (dispatch: ThunkDispatch<RootState, unknown, IaddTaskListAction>) => {
    try {
      const axiosResponse = await axios.post<ScheduleBoardResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND}project/createTaskList`,
        { data: { title } },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { projectId },
        }
      );

      if (axiosResponse.status === 201) {
        dispatch(addTaskListAction(axiosResponse.data.message));
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

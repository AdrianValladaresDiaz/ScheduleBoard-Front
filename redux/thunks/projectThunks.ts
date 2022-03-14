import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  createTaskAction as IcreateTaskAction,
  deleteTaskAction as IDeleteTaskAction,
} from "../../interfaces/actionInterfaces";
import axios from "axios";
import { ScheduleBoardResponse } from "../../interfaces";
import { createTaskAction, deleteTaskAction } from "../actions/actionCreators";

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
      dispatch(createTaskAction(response.message));
    }
  };

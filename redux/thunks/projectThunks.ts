import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { deleteTaskAction as IDeleteTaskAction } from "../../interfaces/actionInterfaces";
import axios from "axios";
import { ScheduleBoardResponse } from "../../interfaces";
import { deleteTaskAction } from "../actions/actionCreators";

export const deleteTaskThunk =
  (taskId: string): ThunkAction<void, RootState, unknown, IDeleteTaskAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, IDeleteTaskAction>) => {
    let response: ScheduleBoardResponse;
    try {
      const axiosResponse = await axios.post<ScheduleBoardResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND}delete`,
        { params: { taskId } }
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

import { AnyAction } from "redux";
import { UserInfo } from "../../interfaces";
import {
  loadUserInfoAction,
  removeUserInfoAction,
} from "../../interfaces/actionInterfaces";
import actionTypes from "../actions/actionTypes";

const emptyUser: UserInfo = {
  name: "",
  surname: "",
  mail: "",
};

const userReducer = (
  user: UserInfo = emptyUser,
  action: AnyAction | loadUserInfoAction | removeUserInfoAction = { type: "" }
): UserInfo => {
  let newUser;
  switch (action.type) {
    case actionTypes.loadUserInfo:
      newUser = { ...(action as loadUserInfoAction).userInfo };
      break;
    case actionTypes.removeUserInfo:
      newUser = { ...emptyUser };
      break;
    default:
      newUser = { ...user };
  }

  return newUser;
};

export default userReducer;

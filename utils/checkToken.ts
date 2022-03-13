import axios from "axios";
import { AxiosPingResponse } from "../interfaces";
import getToken from "./getToken";

const checkToken = async (cookieHeader: string) => {
  try {
    const token: string | undefined = getToken(cookieHeader);
    const response = await axios.get<AxiosPingResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND}ping`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return !response.data.error;
  } catch {
    return false;
  }
};

export default checkToken;

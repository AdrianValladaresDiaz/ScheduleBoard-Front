import axios from "axios";
import { AxiosPingResponse } from "../interfaces/backendResponseInterfaces";
import getToken from "./getToken";

const checkToken = async () => {
  try {
    const token: string | undefined = getToken();
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

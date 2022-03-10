import axios from "axios";
import { Cookies } from "react-cookie";
import { AxiosPingResponseInterface } from "../interfaces/backendResponseInterfaces";
import getToken from "./getToken";

const checkToken = async () => {
  try {
    const token: string | undefined = getToken();
    const response = await axios.get<AxiosPingResponseInterface>(
      `${process.env.NEXT_PUBLIC_BACKEND}ping`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return !response.data.error;
  } catch {
    return false;
  }
};

export default checkToken;

import axios from "axios";
import { AxiosPingResponseInterface } from "../interfaces/backendResponseInterfaces";

const checkToken = async (token: string) => {
  // this function pings with a token af if the thing fails returns false
  try {
    const response = await axios.get<AxiosPingResponseInterface>(
      `${process.env.NEXT_PUBLIC_BACKEND}ping`
    );
    return !response.data.data.error;
  } catch {
    return false;
  }
};

export default checkToken;

import { Cookies } from "react-cookie";

const getToken = (): string | undefined => {
  const cookies: Cookies = new Cookies();

  let token: string | undefined = cookies.get("SCHEDULE_BOARD_TOKEN");
  if (!token) {
    token = process.env.DEV_JWT_TOKEN;
  }
  return token;
};

export default getToken;

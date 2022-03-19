import { Cookies } from "react-cookie";

const getToken = (cookieheader: string): string | undefined => {
  const cookies: Cookies = new Cookies(cookieheader);

  let token: string | undefined = cookies.get(
    process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME as string
  );

  if (!token) {
    token = process.env.DEV_JWT_TOKEN;
  }
  return token;
};

export default getToken;

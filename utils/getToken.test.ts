import getToken from "./getToken";

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock("react-cookie", () => {
  return {
    Cookies: jest.fn().mockImplementation(() => {
      return { get: () => "this is a token" };
    }),
  };
});

describe("Given getToken() function", () => {
  describe("When called in a context with SCHEDULE_BOARD_TOKEN cookie", () => {
    test("Then it should return the value of that cookie", () => {
      const expectedToken = "this is a token";

      const receivedToken = getToken("randomCookieStr");

      expect(receivedToken).toBe(expectedToken);
    });
  });
});

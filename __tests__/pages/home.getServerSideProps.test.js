import { getServerSideProps } from "../../pages/home";
import "whatwg-fetch";
import { GetServerSidePropsContext } from "next";
import { ServerResponse } from "http";

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...OLD_ENV };
});

afterAll(() => {
  process.env = OLD_ENV;
});

describe("Given getServerSideProps from Home", () => {
  describe("When called with a valid token", () => {
    test("it should return that token's user project list", async () => {
      process.env.DEV_JWT_TOKEN = "totallyValidToken";

      const expectedReturn = {
        props: {
          data: {
            projects: [
              {
                title: "Placeholder project 1",
                dueDate: "2009-02-15T00:00:00Z",
                users: ["6228c95243471fa6be08c26b"],
                taskLists: [
                  {
                    title: "valid title",
                    tasks: [
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                    ],
                  },
                  {
                    title: "valid title 2",
                    tasks: [
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      };

      const context = {
        res: {
          writeHead: jest.fn(),
          end: jest.fn(),
        },
      };

      const result = await getServerSideProps(context);

      expect(result).toEqual(expectedReturn);
    });
  });

  describe("When called with no token", () => {
    test("it should redirect to the login screen", async () => {
      process.env.DEV_JWT_TOKEN = "invalidToken";
      const endResponse = jest.fn();
      const context = {
        res: {
          writeHead: jest.fn(),
          end: endResponse,
        },
      };

      await getServerSideProps(context);

      expect(endResponse).toHaveBeenCalled();
    });
  });
});

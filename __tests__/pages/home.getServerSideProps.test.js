import { getServerSideProps } from "../../pages/home";
import "whatwg-fetch";

describe("Given getServerSideProps from Home", () => {
  describe("When called with a valid token", () => {
    test("it should return that token's user project list", async () => {
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
});

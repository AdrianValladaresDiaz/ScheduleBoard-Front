import { getStaticProps } from "../../pages/task/[projectId]/[taskId]";
import "whatwg-fetch";

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...OLD_ENV };
});

afterAll(() => {
  process.env = OLD_ENV;
});

describe("Given getStaticProps from [taskId]", () => {
  describe("When called with context containing a valid taskID and projectId", () => {
    test("it should return that task", async () => {
      process.env.DEV_JWT_TOKEN = "totallyValidToken";

      const expectedReturn = {
        props: {
          error: false,
          message: {
            title: "task title 1",
            description: "an arbitratily long description, in string form 1",
            workHours: 84,
            dueDate: "1970-01-01T00:00:02.009Z",
            assignedTo: [],
            id: "622cdb2eaa2f5a4e7dd16917",
          },
        },
      };

      const projectId = "622cdb2eaa2f5a4e7dd16915";
      const taskId = "622cdb2eaa2f5a4e7dd16917";

      const context = {
        params: {
          projectId,
          taskId,
        },
      };

      const result = await getStaticProps(context);

      expect(result).toEqual(expectedReturn);
    });
  });
});

import { screen } from "@testing-library/react";
import ProjectPage, { getStaticProps } from "../../pages/projects/[projectId]";
import sampleProjectList from "../../testingutils/sampleProjectList";
import { GetStaticPathsContext } from "next";
import renderWithProviders from "../../mocks/renderWithProviders";

let projectTestingSample = { ...sampleProjectList[0] };
beforeEach(() => {
  projectTestingSample = { ...sampleProjectList[0] };
});

describe("Given a project page", () => {
  describe("When received by the client", () => {
    test("Then it should show the entire project", () => {
      const error = false;

      renderWithProviders(
        <ProjectPage error={error} message={projectTestingSample} />
      );

      const listTitle = screen.getByText(/task list 1/i);
      const taskTitle = screen.getAllByText(/task title/i);

      expect(listTitle).toBeInTheDocument();
      expect(taskTitle).not.toHaveLength(0);
    });
  });

  describe("When it renders tasklists", () => {
    test("Each taskList should have a 'createTask' button and that button should create a task", async () => {
      const error = false;

      renderWithProviders(
        <ProjectPage error={error} message={projectTestingSample} />
      );

      const createTaskButtonList = await screen.getAllByTitle("create task");

      expect(createTaskButtonList).not.toHaveLength(0);
    });
  });
});

describe("Given the project page's getStaticProps function", () => {
  describe("When called with a context containing a valid projectId", () => {
    test("Then it should return that entire project", async () => {
      const projectId = "622cdb2eaa2f5a4e7dd16915";
      const expectedReturn = {
        props: {
          error: false,
          message: {
            id: "6228d27843471fa6be08c26e",
            title: "Placeholder project 1",
            dueDate: "2009-02-15T00:00:00.000Z",
            users: ["6228c95243471fa6be08c26b"],
            taskLists: [
              {
                id: "622c8e4731b13e8c658120ca",
                title: "valid title",
                tasks: [
                  {
                    id: "622c8ce820db0fae1c1bf49e",
                    assignedTo: [],
                    title: "task title 1",
                    description:
                      "an arbitratily long description, in string form 1",
                    workHours: 84,
                    dueDate: "2009-02-15T00:00:00.000Z",
                  },
                  {
                    id: "622c8db5cea9959b117bb1b4",
                    assignedTo: [],
                    title: "task title 2",
                    description:
                      "an arbitratily long description, in string form 2",
                    workHours: 84,
                    dueDate: "2009-02-15T00:00:00.000Z",
                  },
                  {
                    id: "622c8db5cea9959b117bb1b5",
                    assignedTo: [],
                    title: "task title 3",
                    description:
                      "an arbitratily long description, in string form 3",
                    workHours: 84,
                    dueDate: "2009-02-15T00:00:00.000Z",
                  },
                ],
              },
              {
                id: "622c8e4731b13e8c658120ce",
                title: "valid title 2",
                tasks: [
                  {
                    id: "622c8df95a8ee80141edf60b",
                    assignedTo: [],
                    title: "task title 1",
                    description:
                      "an arbitratily long description, in string form 1",
                    workHours: 84,
                    dueDate: "2009-02-15T00:00:00.000Z",
                  },
                  {
                    id: "622c8df95a8ee80141edf60c",
                    assignedTo: [],
                    title: "task title 2",
                    description:
                      "an arbitratily long description, in string form 2",
                    workHours: 84,
                    dueDate: "2009-02-15T00:00:00.000Z",
                  },
                  {
                    id: "622c8df95a8ee80141edf60d",
                    assignedTo: [],
                    title: "task title 3",
                    description:
                      "an arbitratily long description, in string form 3",
                    workHours: 84,
                    dueDate: "2009-02-15T00:00:00.000Z",
                  },
                ],
              },
            ],
          },
        },
      };
      const context: unknown = {
        params: {
          projectId,
        },
      };

      const result = await getStaticProps(context as GetStaticPathsContext);

      expect(result).toEqual(expectedReturn);
    });
  });
});

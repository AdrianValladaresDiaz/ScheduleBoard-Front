import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import type { ProjectInfo } from "../../interfaces";
import ProjectPage from "../../pages/projects/[projectId]";

describe("Given a project page", () => {
  describe("When received by the client", () => {
    test("Then it should show the entire project", () => {
      const error = false;
      const project: ProjectInfo = {
        _id: "project id",
        title: "Placeholder project 1",
        dueDate: new Date(2009, 2),
        users: [{ name: "user", surname: "surname", id: "one id" }],
        taskLists: [
          {
            _id: "taskList id 1",
            title: "Task List 1",
            tasks: [
              {
                _id: "task id 1",
                assignedTo: [],
                title: "task title",
                description: "an arbitratily long description, in string form",
                workHours: 84,
                dueDate: new Date(2009, 2),
              },
              {
                _id: "task id 2",
                assignedTo: [],
                title: "task title",
                description: "an arbitratily long description, in string form",
                workHours: 84,
                dueDate: new Date(2009, 2),
              },
            ],
          },
          {
            _id: "taskList id 2",
            title: "Task List 2",
            tasks: [
              {
                _id: "task id 3",
                assignedTo: [],
                title: "task title",
                description: "an arbitratily long description, in string form",
                workHours: 84,
                dueDate: new Date(2009, 2),
              },
              {
                _id: "task id 4",
                assignedTo: [],
                title: "task title",
                description: "an arbitratily long description, in string form",
                workHours: 84,
                dueDate: new Date(2009, 2),
              },
              {
                _id: "task id 5",
                assignedTo: [],
                title: "task title",
                description: "an arbitratily long description, in string form",
                workHours: 84,
                dueDate: new Date(2009, 2),
              },
            ],
          },
        ],
      };

      render(
        <Provider store={store}>
          <ProjectPage error={error} message={project} />
        </Provider>
      );

      const listTitle = screen.getByText(/task list 1/i);
      const taskTitle = screen.getAllByText(/task title/i);

      expect(listTitle).toBeInTheDocument();
      expect(taskTitle).not.toHaveLength(0);
    });
  });
});

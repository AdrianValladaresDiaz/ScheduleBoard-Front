import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import ProjectPage from "../../pages/projects/[projectId]";
import sampleProjectList from "../../testingutils/sampleProjectList";

let projectTestingSample = { ...sampleProjectList[0] };
beforeEach(() => {
  projectTestingSample = { ...sampleProjectList[0] };
});

describe("Given a project page", () => {
  describe("When received by the client", () => {
    test("Then it should show the entire project", () => {
      const error = false;

      render(
        <Provider store={store}>
          <ProjectPage error={error} message={projectTestingSample} />
        </Provider>
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

      render(
        <Provider store={store}>
          <ProjectPage error={error} message={projectTestingSample} />
        </Provider>
      );

      const createTaskButtonList = await screen.getAllByTitle("create task");

      expect(createTaskButtonList).not.toHaveLength(0);
    });
  });
});

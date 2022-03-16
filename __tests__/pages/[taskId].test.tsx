import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import TaskDetail from "../../pages/task/[projectId]/[taskId]";
import store from "../../redux/store";
import sampleProjectList from "../../testingutils/sampleProjectList";

describe("Given a task modification form page", () => {
  describe("When received by the client with a task and no error", () => {
    test("Then it should show that task's info in the form", () => {
      const error = false;
      const task = sampleProjectList[0].taskLists[0].tasks[0];

      render(
        <Provider store={store}>
          <TaskDetail error={error} message={task} />
        </Provider>
      );

      const taskDescription = screen.getByDisplayValue(
        /an arbitratily long description, in string form 1/i
      );
      const taskTitle = screen.getByDisplayValue(/task title 1/i);
      const workHours = screen.getByDisplayValue(84);

      expect(taskDescription).toBeInTheDocument();
      expect(taskTitle).toBeInTheDocument();
      expect(workHours).toBeInTheDocument();
    });
  });

  describe("When the client modifies the form fields", () => {
    test("Then the page should update accordingly", () => {
      const error = false;
      const task = sampleProjectList[0].taskLists[0].tasks[0];

      render(
        <Provider store={store}>
          <TaskDetail error={error} message={task} />
        </Provider>
      );

      const taskTitle = screen.getByDisplayValue(/task title 1/i);

      userEvent.type(taskTitle, "suppose the user writes this");

      const updatedTitle = screen.getByDisplayValue(
        /suppose the user writes this/i
      );

      expect(updatedTitle).toBeInTheDocument();
    });
  });
});

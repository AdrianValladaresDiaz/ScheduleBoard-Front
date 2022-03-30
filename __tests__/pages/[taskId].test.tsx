import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/utils";
import { useRouter } from "next/router";
import renderWithProviders from "../../mocks/renderWithProviders";
import TaskDetail from "../../pages/task/[projectId]/[taskId]";
import sampleProjectList from "../../testingutils/sampleProjectList";

jest.mock("next/router", () => {
  const router = {
    query: {
      projectId: "622cdb2eaa2f5a4e7dd16915",
      taskId: "622cdb2eaa2f5a4e7dd16917",
    },
    push: jest.fn(),
  };
  return {
    useRouter: () => router,
  };
});

describe("Given a task modification form page", () => {
  describe("When received by the client with a task and no error", () => {
    test("Then it should show that task's info in the form", () => {
      const error = false;
      const task = sampleProjectList[0].taskLists[0].tasks[0];

      renderWithProviders(<TaskDetail error={error} message={task} />);

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

      renderWithProviders(<TaskDetail error={error} message={task} />);

      const taskTitle = screen.getByDisplayValue(/task title 1/i);

      userEvent.type(taskTitle, "suppose the user writes this");

      const updatedTitle = screen.getByDisplayValue(
        /suppose the user writes this/i
      );

      expect(updatedTitle).toBeInTheDocument();
    });
  });

  describe("When the client clicks the submit button and gets no error in response", () => {
    test("Then redirect should be called and the error message should not show up", async () => {
      const error = false;
      const task = sampleProjectList[0].taskLists[0].tasks[0];
      const redirect = useRouter().push;

      renderWithProviders(<TaskDetail error={error} message={task} />);

      const submitButton = screen.getByText(/save changes/i);
      const errorButton = screen.getByText(/something went wrong/i);

      userEvent.click(submitButton);

      await wait(1000);

      expect(errorButton).not.toBeVisible();
      expect(redirect).toHaveBeenCalled();
    });
  });
});

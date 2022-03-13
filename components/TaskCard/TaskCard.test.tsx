import { render, screen } from "@testing-library/react";
import TaskCard from "./TaskCard";
import { Task as TaskInterface } from "../../interfaces";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Given a Task component", () => {
  describe("When it is rendered with task information", () => {
    test("Then it should display said information", () => {
      const taskInfo: TaskInterface = {
        title: "task title",
        description: "short description",
        workHours: 8,
        dueDate: new Date(2005, 3, 15),
        assignedTo: [],
        _id: "task id",
      };

      render(
        <Provider store={store}>
          <TaskCard taskInfo={taskInfo} />
        </Provider>
      );

      const title = screen.getByRole("heading", { name: /task title/i });
      const description = screen.getByText(/short description/i);

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});

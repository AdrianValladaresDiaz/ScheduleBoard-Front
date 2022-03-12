import { render, screen } from "@testing-library/react";
import Task from "./Task";
import { Task as TaskInterface } from "../../interfaces";

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

      render(<Task taskInfo={taskInfo} />);

      const title = screen.getByRole("heading", { name: /task title/i });
      const description = screen.getByText(/short description/i);

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});

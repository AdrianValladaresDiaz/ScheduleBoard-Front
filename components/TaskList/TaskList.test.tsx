import { render, screen } from "@testing-library/react";
import exp from "constants";
import { Task, TaskList as TaskListInterface } from "../../interfaces";
import TaskList from "./TaskList";

describe("Given the TaskList component", () => {
  describe("When it is rendered", () => {
    test("It should render a heading and a list", () => {
      const title = "title";
      const tasks: any[] = [];
      const _id = "id";

      render(<TaskList taskList={{ title, tasks, _id }} />);

      const heading = screen.getByText(/title/i);
      const list = screen.getByRole("list");

      expect(heading).toBeInTheDocument();
      expect(list).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a list of tasks", () => {
    test("It should render that list", () => {
      const expectedListLength = 3;
      const task1: Task = {
        _id: "1",
        assignedTo: ["1"],
        description: "description",
        dueDate: new Date(500),
        title: "task 1",
        workHours: 5,
      };
      const task2: Task = {
        _id: "2",
        assignedTo: ["1"],
        description: "description",
        dueDate: new Date(500),
        title: "task 2",
        workHours: 5,
      };
      const task3: Task = {
        _id: "3",
        assignedTo: ["1"],
        description: "description",
        dueDate: new Date(500),
        title: "task 3",
        workHours: 5,
      };

      const taskList: TaskListInterface = {
        title: "taskList",
        tasks: [task1, task2, task3],
        _id: "6425",
      };

      render(<TaskList taskList={taskList} />);

      const title = screen.getByText(/taskList/i);
      const screenTask1 = screen.getByText(/task 1/i);
      const screenTask2 = screen.getByText(/task 2/i);
      const screenTask3 = screen.getByText(/task 3/i);
      const listItems = screen.getAllByRole("listitem");

      expect(title).toBeInTheDocument();
      expect(screenTask1).toBeInTheDocument();
      expect(screenTask2).toBeInTheDocument();
      expect(screenTask3).toBeInTheDocument();
      expect(listItems).toHaveLength(expectedListLength);
    });
  });
});

import TaskList from "./TaskList";
import { render, screen } from "@testing-library/react";
import { Task, TaskList as TaskListInterface } from "../../interfaces";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
let store: any;
beforeEach(() => {
  store = mockStore({
    project: { id: "fakeId" },
  });
});

describe("Given the TaskList component", () => {
  describe("When it is rendered", () => {
    test("It should render a heading and a list", () => {
      const title = "title";
      const tasks: any[] = [];
      const id = "id";

      render(
        <Provider store={store}>
          <TaskList taskList={{ title, tasks, id }} />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: /title/i });
      const list = screen.getByRole("list");

      expect(heading).toBeInTheDocument();
      expect(list).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a list of tasks", () => {
    test("It should render that list", () => {
      const expectedListLength = 3;
      const task1: Task = {
        id: "1",
        assignedTo: ["1"],
        description: "description",
        dueDate: new Date(500),
        title: "task 1",
        workHours: 5,
      };
      const task2: Task = {
        id: "2",
        assignedTo: ["1"],
        description: "description",
        dueDate: new Date(500),
        title: "task 2",
        workHours: 5,
      };
      const task3: Task = {
        id: "3",
        assignedTo: ["1"],
        description: "description",
        dueDate: new Date(500),
        title: "task 3",
        workHours: 5,
      };

      const taskList: TaskListInterface = {
        title: "taskList",
        tasks: [task1, task2, task3],
        id: "6425",
      };

      render(
        <Provider store={store}>
          <TaskList taskList={taskList} />
        </Provider>
      );

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

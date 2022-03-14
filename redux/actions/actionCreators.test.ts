import { Task } from "../../interfaces";
import {
  createTaskAction,
  deleteTaskAction,
  loadProjectAction,
} from "./actionCreators";

describe("Given action creator 'loadProjectAction'", () => {
  describe("When called with project info", () => {
    test("Then it should return an actionType with type 'LOAD_PROJECT'", () => {
      const expectedActionType = "LOAD_PROJECT";
      const project = {
        _id: "project id",
        title: "Placeholder project 1",
        dueDate: new Date(2009, 2),
        users: ["userIdFromMongoDb"],
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

      const action = loadProjectAction(project);

      expect(action.type).toBe(expectedActionType);
    });
  });

  describe("When called with project info", () => {
    test("Then it should return an action with that project in it", () => {
      const project = {
        _id: "project id",
        title: "Placeholder project 1",
        dueDate: new Date(2009, 2),
        users: ["userIdFromMongoDb"],
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

      const action = loadProjectAction(project);

      expect(action.project).toEqual(project);
    });
  });
});

describe("Given action creator 'deleteTask'", () => {
  describe("When called with a task id", () => {
    test("Then it should return an actionType with type 'DELETE_TASK'", () => {
      const expectedActionType = "DELETE_TASK";
      const taskId = "68452130";

      const action = deleteTaskAction(taskId);

      expect(action.type).toBe(expectedActionType);
    });
  });

  describe("When called with a task id", () => {
    test("Then it should return an action with that task id in it", () => {
      const taskId = "135420";

      const action = deleteTaskAction(taskId);

      expect(action.taskId).toEqual(taskId);
    });
  });
});

describe("Given action creator 'createTask'", () => {
  describe("When called with a task", () => {
    test("Then it should return an actionType with type 'CREATE_TASK' and that task", () => {
      const expectedActionType = "CREATE_TASK";
      const task: Task = {
        _id: "task id",
        title: "task title",
        description: "an arbitratily long description, in string form",
        workHours: 84,
        dueDate: new Date(2009),
        assignedTo: [],
      };

      const action = createTaskAction(task);

      expect(action.type).toBe(expectedActionType);
      expect(action.task).toEqual(task);
    });
  });
});

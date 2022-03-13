import { loadProjectAction } from "./actionCreators";

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

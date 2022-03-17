import { deleteTaskAction, loadProjectAction } from "../actions/actionCreators";
import projectReducer from "./projectReducer";
import sampleProjectList from "../../testingutils/sampleProjectList";

const projects = [...sampleProjectList];
let sampleProject = { ...projects[0] };
beforeEach(() => {
  sampleProject = projects[0];
});

describe("Given projectReducer", () => {
  describe("When called with an unmatched action type", () => {
    test("Then it should return an empty project", () => {
      const badAction = { type: "" };
      const expectedOutput = {
        _id: "",
        dueDate: new Date(2009),
        taskLists: [],
        title: "empty project",
        users: [],
      };
      const exampleProject = {
        _id: "45123",
        dueDate: new Date(2010),
        taskLists: [],
        title: "Different project",
        users: [],
      };

      const returnedProject = projectReducer(exampleProject, badAction);

      expect(returnedProject).toEqual(expectedOutput);
    });
  });

  describe("When called with an action 'loadProject' that has a project in it ", () => {
    test("Then it should return that project", () => {
      const project = {
        _id: "45123",
        dueDate: new Date(2010),
        taskLists: [],
        title: "Different project",
        users: [],
      };
      const action = loadProjectAction(project);

      const returnedProject = projectReducer(project, action);

      expect(returnedProject).toEqual(project);
    });
  });

  describe("When called with an action 'deleteTask' that has a taskId in it ", () => {
    test("Then it should return a project without that action in it", () => {
      const currentState = sampleProject;
      const idToDelete = "622cdb2eaa2f5a4e7dd16917";
      const action = deleteTaskAction(idToDelete);

      const existingTask = currentState.taskLists[0].tasks[0];

      expect(currentState.taskLists[0].tasks[0]).toMatchObject(existingTask);

      const newState = projectReducer(currentState, action);

      expect(newState.taskLists[0].tasks[0]).not.toMatchObject(existingTask);
    });
  });
});
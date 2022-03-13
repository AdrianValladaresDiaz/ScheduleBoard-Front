import { loadProjectAction } from "../actions/actionCreators";
import projectReducer from "./projectReducer";

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
});

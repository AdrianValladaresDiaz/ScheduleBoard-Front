import { createTaskThunk, deleteTaskThunk } from "./projectThunks";

describe("Given 'deleteTaskThunk'", () => {
  describe("When called with a taskId, a projectId and an action", () => {
    test("That action should be dispatched", async () => {
      const taskId = "622cdb2eaa2f5a4e7dd16917";
      const projectId = "622cdb2eaa2f5a4e7dd16915";
      const dispatch = jest.fn();

      const innerThunk = deleteTaskThunk(taskId, projectId);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When called with nonexistant taskId, a projectId and an action", () => {
    test("That action should not be dispatched", async () => {
      const taskId = "invalid_task_id";
      const projectId = "622cdb2eaa2f5a4e7dd16915";
      const dispatch = jest.fn();

      const innerThunk = deleteTaskThunk(taskId, projectId);
      await innerThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given 'createTaskThunk'", () => {
  describe("When called with args projectId, taskListId, taskTitle and an action", () => {
    test("That action should be dispatched", async () => {
      const taskListId = "622cdb2eaa2f5a4e7dd16917";
      const projectId = "622cdb2eaa2f5a4e7dd16915";
      const taskTitle = "new title";
      const dispatch = jest.fn();

      const innerThunk = createTaskThunk(projectId, taskListId, taskTitle);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When called with ninvalid args and an action", () => {
    test("That action should not be dispatched", async () => {
      const taskListId = "invalid id";
      const projectId = "622cdb2eaa2f5a4e7dd16915";
      const taskTitle = "new title";
      const dispatch = jest.fn();

      const innerThunk = createTaskThunk(projectId, taskListId, taskTitle);
      await innerThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

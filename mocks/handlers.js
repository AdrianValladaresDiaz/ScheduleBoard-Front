// src/mocks/handlers.js
import { rest } from "msw";
export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_BACKEND}userProjects`,
    (req, res, ctx) => {
      if (req.headers._headers.authorization === "Bearer invalidToken") {
        return res(
          ctx.status(401),
          ctx.json({
            error: true,
            message: "disallowed by backend",
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          error: false,
          message: {
            projects: [
              {
                title: "Placeholder project 1",
                dueDate: "2009-02-15T00:00:00Z",
                users: ["6228c95243471fa6be08c26b"],
                taskLists: [
                  {
                    title: "valid title",
                    tasks: [
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                    ],
                  },
                  {
                    title: "valid title 2",
                    tasks: [
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                      {
                        title: "task title",
                        description:
                          "an arbitratily long description, in string form",
                        workHours: 84,
                        dueDate: "2009-02-15T00:00:00Z",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        })
      );
    }
  ),

  rest.get("https://schedule-board.onrender.com/ping", (req, res, ctx) => {
    if (req.headers._headers.authorization === "Bearer invalidToken") {
      return res(
        ctx.status(401),
        ctx.json({
          error: true,
          message: "disallowed by backend",
        })
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          error: false,
          message: "pong",
        })
      );
    }
  }),

  rest.get(`${process.env.NEXT_PUBLIC_BACKEND}task`, (req, res, ctx) => {
    const projectId = req.url.searchParams.get("projectId");
    const taskId = req.url.searchParams.get("taskId");
    if (
      projectId === "622cdb2eaa2f5a4e7dd16915" &&
      taskId === "622cdb2eaa2f5a4e7dd16917"
    ) {
      return res(
        ctx.status(200),
        ctx.json({
          error: false,
          message: {
            title: "task title 1",
            description: "an arbitratily long description, in string form 1",
            workHours: 84,
            dueDate: "1970-01-01T00:00:02.009Z",
            assignedTo: [],
            _id: "622cdb2eaa2f5a4e7dd16917",
          },
        })
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({ error: true, message: "couldn't find task" })
      );
    }
  }),

  rest.delete(
    `${process.env.NEXT_PUBLIC_BACKEND}deleteTask`,
    (req, res, ctx) => {
      const projectId = req.url.searchParams.get("projectId");
      const taskId = req.url.searchParams.get("taskId");
      if (
        projectId === "622cdb2eaa2f5a4e7dd16915" &&
        taskId === "622cdb2eaa2f5a4e7dd16917"
      ) {
        return res(
          ctx.status(200),
          ctx.json({
            error: false,
            message: `task ${taskId} removed from project ${projectId}`,
          })
        );
      } else {
        return res(
          ctx.status(404).json({
            error: true,
            message: `task ${taskId} was not found in project ${projectId}`,
          })
        );
      }
    }
  ),

  rest.post(`${process.env.NEXT_PUBLIC_BACKEND}createTask`, (req, res, ctx) => {
    const projectId = req.url.searchParams.get("projectId");
    const taskListId = req.url.searchParams.get("taskListId");
    const taskTitle = req.url.searchParams.get("taskTitle");
    if (
      projectId === "622cdb2eaa2f5a4e7dd16915" &&
      taskListId === "622cdb2eaa2f5a4e7dd16917" &&
      taskTitle === "new title"
    ) {
      return res(
        ctx.status(200),
        ctx.json({
          error: false,
          message: {
            title: "task title",
            description: "an arbitratily long description, in string form",
            workHours: 84,
            dueDate: "2009-02-15T00:00:00Z",
          },
        })
      );
    } else {
      return res(
        ctx.status(404).json({
          error: true,
          message: "Couldn't find project",
        })
      );
    }
  }),
];

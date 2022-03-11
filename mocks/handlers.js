// src/mocks/handlers.js
import { rest } from "msw";
export const handlers = [
  rest.get(
    "https://schedule-board.onrender.com/userProjects",
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
];

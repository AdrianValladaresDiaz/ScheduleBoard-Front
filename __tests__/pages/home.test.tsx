import { render, screen } from "@testing-library/react";
import Home from "../../pages/home";

describe("Given the home page", () => {
  describe("When received by the client ", () => {
    test("Should render a list of projects", async () => {
      const projects = [
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
      ];

      const data = { projects };

      render(<Home data={data} />);

      const listOfLists = await screen.getAllByRole("list");

      expect(listOfLists).toHaveLength(1);
    });
  });
});

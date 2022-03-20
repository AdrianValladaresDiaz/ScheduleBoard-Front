import { render, screen } from "@testing-library/react";
import Home from "../../pages/home";

describe("Given the home page", () => {
  describe("When received by the client ", () => {
    test("Should render a list of projects", async () => {
      const projects = [
        {
          id: "id 1",
          title: "Placeholder project 1",
          dueDate: "2009-02-15T00:00:00Z",
          users: [{ name: "user", surname: "surname", id: "one id" }],
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

      expect(listOfLists).not.toBeNull();
    });
  });
});

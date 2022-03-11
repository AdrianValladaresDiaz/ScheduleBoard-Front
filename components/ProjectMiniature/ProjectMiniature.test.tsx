import { render, screen } from "@testing-library/react";
import ProjectMiniature from "./ProjectMiniature";

describe("Given component ProjectMiniature", () => {
  describe("When rendered with project information", () => {
    test("Then it should present that information", () => {
      const project = {
        title: "My project title",
        dueDate: "1995-12-17T03:24:00",
        users: [{ name: "user", surname: "surname", id: "one id" }],
        id: "project Id",
      };

      render(<ProjectMiniature project={project} />);

      const date = screen.getByText(/due date/i);
      const team = screen.getByText(/team/i);

      expect(date).toBeInTheDocument();
      expect(team).toBeInTheDocument();
    });
  });

  describe("When rendered with project information containing 2 users", () => {
    test("Then it should present a list with 2 user avatars", () => {
      const expectedLength = 2;
      const project = {
        title: "My project title",
        dueDate: "1995-12-17T03:24:00",
        users: [
          { name: "adri", surname: "surname", id: "one id" },
          { name: "alvaro", surname: "surname", id: "another id" },
        ],
        id: "project Id",
      };

      render(<ProjectMiniature project={project} />);

      const users = screen.getAllByRole("listitem");

      expect(users).toHaveLength(expectedLength);
    });
  });
});

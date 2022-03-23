import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../mocks/renderWithProviders";
import Home from "../../pages/home";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";
import exp from "constants";
import { redirect } from "next/dist/server/api-utils";

let mockedCookies: any = {};

jest.setTimeout(8000);

jest.mock("react-cookie", () => ({
  useCookies: () => [mockedCookies],
}));

jest.mock("next/router", () => {
  const router = {
    query: {
      projectId: "622cdb2eaa2f5a4e7dd16915",
      taskId: "622cdb2eaa2f5a4e7dd16917",
    },
    push: jest.fn(),
  };
  return {
    useRouter: () => router,
  };
});

describe("Given the home page", () => {
  describe("When received by the client ", () => {
    test("Should render a list of projects and a project creation form", async () => {
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

      renderWithProviders(<Home data={data} />);

      const listOfLists = screen.getAllByRole("list");
      const createButton = screen.getByRole("button", {
        name: /create project/i,
      });

      expect(listOfLists).not.toBeNull();
      expect(createButton).toBeInTheDocument();
    });
  });

  describe("When the user inputs information in the project form", () => {
    test("That information should be reflected in the form", () => {
      const userInput = "New Project title";
      const data = { projects: [] };
      renderWithProviders(<Home data={data} />);

      const titleInput = screen.getByLabelText(/project title/i);

      userEvent.type(titleInput, userInput);

      expect(titleInput).toBeInTheDocument();
    });
  });

  describe("When there is an error and the user clicks 'create project' ", () => {
    test("Then the error component should be visible, and disappear once clicked", async () => {
      const validToken = "invalid token";
      mockedCookies[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME as string] =
        validToken;

      const data = { projects: [] };

      renderWithProviders(<Home data={data} />);

      const createButton = screen.getByRole("button", {
        name: /create project/i,
      });

      userEvent.click(createButton);

      await wait(1000);

      const errorButton = screen.getByRole("button", {
        name: /something went wrong/i,
      });

      expect(errorButton).toBeVisible();

      userEvent.click(errorButton);

      await waitFor(() => expect(errorButton).not.toBeVisible());

      expect(errorButton).not.toBeVisible();
    });
  });
});

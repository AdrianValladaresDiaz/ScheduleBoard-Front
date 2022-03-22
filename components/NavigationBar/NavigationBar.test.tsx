import { render, screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import NavigationBar from "./NavigationBar";

describe("Given the navigation Bar", () => {
  describe("When rendered", () => {
    test("It should show a list of links", () => {
      renderWithProviders(<NavigationBar />);
      const ul = screen.getByRole("list");

      expect(ul).toBeInTheDocument();
    });
  });
});

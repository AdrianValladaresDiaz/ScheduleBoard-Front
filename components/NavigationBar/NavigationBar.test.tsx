import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

describe("Given the navigation Bar", () => {
  describe("When rendered", () => {
    test("It should show a list of links", () => {
      render(<NavigationBar />);

      const ul = screen.getByRole("list");

      expect(ul).toBeInTheDocument();
    });
  });
});

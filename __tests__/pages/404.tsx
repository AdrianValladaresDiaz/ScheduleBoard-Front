import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import NotFoundPage from "../../pages/404";

describe("Given the 404 page", () => {
  describe("When called by the client", () => {
    test("Then it should render the 404 message", () => {
      const expectedMessage = /this page does not exist/i;
      renderWithProviders(<NotFoundPage />);

      const message = screen.findByText(expectedMessage);

      expect(message).toBeInTheDocument;
    });
  });
});

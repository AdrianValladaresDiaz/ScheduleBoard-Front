import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import NotFoundPage from "../../pages/404";
import store from "../../redux/store";

describe("Given the 404 page", () => {
  describe("When called by the client", () => {
    test("Then it should render the 404 message", () => {
      const expectedMessage = /this page does not exist/i;
      render(
        <Provider store={store}>
          <NotFoundPage />
        </Provider>
      );

      const message = screen.findByText(expectedMessage);

      expect(message).toBeInTheDocument;
    });
  });
});

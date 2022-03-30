import { Provider } from "react-redux";
import store from "../../redux/store";
import { screen } from "@testing-library/react";
import RegisterPage from "../../pages/register";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../mocks/renderWithProviders";

describe("Given the register page", () => {
  describe("When received by the client", () => {
    test("Then it should show the register form", () => {
      renderWithProviders(<RegisterPage />);

      const registerButton = screen.getByText(/register me/i);
      const email = screen.getByText(/e-mail/i);

      expect(registerButton).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
  });

  describe("When the user writes in the form", () => {
    test("Then the form should update appropiately", () => {
      const userEmailInput = "usermail@mail.com";
      const userNameInput = "name user input";
      renderWithProviders(<RegisterPage />);

      const emailInput = screen.getByLabelText(/mail/i);
      const nameInput = screen.getByLabelText(/^name/im);

      userEvent.type(emailInput, userEmailInput);
      userEvent.type(nameInput, userNameInput);

      expect(emailInput).toHaveDisplayValue(userEmailInput);
      expect(nameInput).toHaveDisplayValue(userNameInput);
    });
  });

  describe("When the two passwords mismatch", () => {
    test("Then the user should see a warning about it and the submit button should be disabled", () => {
      const password = "password";
      const diffPassword = "adslfñkadj";

      renderWithProviders(<RegisterPage />);
      const passwordInput = screen.getByLabelText(/^password/im);
      const confirmInput = screen.getByLabelText(/confirm/i);
      const button = screen.getByRole("button", { name: /register me/i });

      userEvent.type(passwordInput, password);
      userEvent.type(confirmInput, diffPassword);

      expect(button).toBeDisabled();
    });
  });

  describe("When the form is incomplete", () => {
    test.todo("Then the submit button should be disabled");
  });

  describe("When the mail introduced already exists", () => {
    test.todo(
      "Then the user should see a warning about it and the submit button should be disabled"
    );
  });
});

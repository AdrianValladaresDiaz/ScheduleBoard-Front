import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import LoginPage from "../../pages/login";
import store from "../../redux/store";

jest.mock("next/router", () => {
  const router = {
    push: jest.fn(),
  };
  return {
    useRouter: () => router,
  };
});

describe("Given the login page", () => {
  describe("When received by the client", () => {
    test("Then it should the login form", () => {
      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );

      const loginButton = screen.getByText(/log me in/i);
      const email = screen.getByText(/e-mail/i);
      const password = screen.getByText(/password/i);

      expect(loginButton).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });
  });

  describe("When the user writes in the form", () => {
    test("Then the form should update appropiately", () => {
      const userEmailInput = "usermail@mail.com";
      const userPasswordInput = "userPassword";

      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );

      const emailInput = screen.getByLabelText(/mail/i);
      const passwordInput = screen.getByLabelText(/^password/im);

      userEvent.type(emailInput, userEmailInput);
      userEvent.type(passwordInput, userPasswordInput);

      expect(emailInput).toHaveDisplayValue(userEmailInput);
      expect(passwordInput).toHaveDisplayValue(userPasswordInput);
    });
  });

  describe("When one of the inputs is empty", () => {
    test("Then the submit button should be disabled", () => {
      const mail = "mail";

      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );

      const emailInput = screen.getByLabelText(/mail/i);
      const button = screen.getByRole("button", { name: /log me in/i });

      userEvent.type(emailInput, mail);

      expect(button).toBeDisabled();
    });
  });

  describe("When the submit button is clicked and a bad response is received", () => {
    test("Then the error button should be visible", async () => {
      const userEmailInput = "badUsermail@mail.com";
      const userPasswordInput = "userPassword";

      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );

      const emailInput = screen.getByLabelText(/mail/i);
      const passwordInput = screen.getByLabelText(/^password/im);
      const button = screen.getByRole("button", { name: /log me in/i });
      const errorButton = screen.getByText(/something went wrong/i);

      userEvent.type(emailInput, userEmailInput);
      userEvent.type(passwordInput, userPasswordInput);
      userEvent.click(button);

      await waitFor(() => {
        expect(errorButton).toBeVisible();
      });

      expect(errorButton).toBeVisible();
    });
  });

  describe("When the submit button is clicked and a good response is received", () => {
    test("Then the success screen should be shown and redirect should be called", async () => {
      const userEmailInput = "usermail@mail.com";
      const userPasswordInput = "userPassword";
      const redirect = useRouter().push;
      const homePage = "/home";

      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );

      const emailInput = screen.getByLabelText(/mail/i);
      const passwordInput = screen.getByLabelText(/^password/im);
      const button = screen.getByRole("button", { name: /log me in/i });
      const errorButton = screen.getByText(/something went wrong/i);

      userEvent.type(emailInput, userEmailInput);
      userEvent.type(passwordInput, userPasswordInput);
      userEvent.click(button);

      await waitForElementToBeRemoved(emailInput);

      const success = screen.getByText(/Successfully logged in/i);

      await waitFor(() => expect(redirect).toHaveBeenCalled(), {
        timeout: 2000,
      });

      expect(success).toBeVisible();
      expect(errorButton).not.toBeVisible();
      expect(redirect).toHaveBeenCalledWith(homePage);
    });
  });
});

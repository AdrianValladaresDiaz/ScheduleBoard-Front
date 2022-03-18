import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import Home from "../../pages";
import store from "../../redux/store";

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

describe("Given the root page", () => {
  describe("When loaded by the client", () => {
    test("Then it should redirect to /home", () => {
      const redirect = useRouter().push;

      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );

      expect(redirect).toHaveBeenCalled();
    });
  });
});

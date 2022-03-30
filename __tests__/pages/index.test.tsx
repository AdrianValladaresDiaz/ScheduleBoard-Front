import { useRouter } from "next/router";
import renderWithProviders from "../../mocks/renderWithProviders";
import Home from "../../pages";

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

      renderWithProviders(<Home />);

      expect(redirect).toHaveBeenCalled();
    });
  });
});

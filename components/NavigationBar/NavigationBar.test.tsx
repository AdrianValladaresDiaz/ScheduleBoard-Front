import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import NavigationBar from "./NavigationBar";
import { useCookies } from "react-cookie";

let mockedCookies: any = {};

jest.mock("react-cookie", () => ({
  useCookies: () => [mockedCookies],
}));

beforeEach(() => {
  mockedCookies = {};
});

describe("Given the navigation Bar", () => {
  describe("When rendered by a client with no cookies", () => {
    test("It should show a list of links", () => {
      mockedCookies = {};

      renderWithProviders(<NavigationBar />);
      const ul = screen.getByRole("list");

      expect(ul).toBeInTheDocument();
    });
  });

  describe("When rendered by a client with valid jwt cookies", () => {
    test("It should display that user initials", async () => {
      const expectedDisplay = "AV";
      const validToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRyaSIsInN1cm5hbWUiOiJ2YWxsYSIsIm1haWwiOiJhZHJpLnZhbGxhQGdtYWlsLmNvbSJ9.rgAaV7f7UAayPP9cexY7qQZytsFtuqNHWCsyeiZLZlA.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.YjanxP0Nl6JCFQYI7cv83zdtiH5kvO-tmF1Rg3j55wk";
      mockedCookies[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME as string] =
        validToken;

      renderWithProviders(<NavigationBar />);
      const initials = await screen.findByText(expectedDisplay);

      expect(initials).toBeInTheDocument();
    });
  });
});

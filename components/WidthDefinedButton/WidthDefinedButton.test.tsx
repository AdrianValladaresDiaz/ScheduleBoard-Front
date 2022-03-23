import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import WidthDefinedButton from "./WidthDefinedButton";

describe("Given the WidthDefinedButton", () => {
  describe("When rendered", () => {
    test("It should match the snapshot", () => {
      renderWithProviders(
        <WidthDefinedButton
          bigContent="O"
          content="normal content"
          onClickAction={() => {}}
        />
      );

      const button = screen.getByRole("button");

      (expect(button) as any).toMatchSnapshot();
    });
  });
});

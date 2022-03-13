import { render, screen } from "@testing-library/react";
import ScheduleButton from "./ScheduleButton";
import userEvent from "@testing-library/user-event";

describe("Given  ScheduleButton component", () => {
  describe("When clicked", () => {
    test("Should call itt's onclick function", () => {
      const action = jest.fn();
      const buttonContent = "text content";

      render(<ScheduleButton onClickAction={action} content={buttonContent} />);

      const button = screen.getByText(/text content/i);

      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});

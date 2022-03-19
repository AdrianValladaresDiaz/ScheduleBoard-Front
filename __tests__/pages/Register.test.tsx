import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import ProjectPage from "../../pages/projects/[projectId]";
import sampleProjectList from "../../testingutils/sampleProjectList";

describe("Given he register page", () => {
  describe("When received by the client", () => {
    test.todo("Then it should show the register form");
  });

  describe("When the user writes in the form", () => {
    test.todo("Then the form should update appropiately");
  });

  describe("When the form is incomplete", () => {
    test.todo("Then the submit button should be disabled");
  });

  describe("When the mail introduced already exists", () => {
    test.todo(
      "Then the user should see a warning about it and the submit button should be disabled"
    );
  });

  describe("When the two passwords mismatch", () => {
    test.todo(
      "Then the user should see a warning about it and the submit button should be disabled"
    );
  });
});

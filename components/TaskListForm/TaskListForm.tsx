import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ScheduleButton from "../ScheduleButton/ScheduleButton";

const StyledTaskCreationForm = styled.article`
  border-color: black;
  border-right: 4px solid black;
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;

  & header {
    overflow: hidden;
    height: 75px;
    width: 100%;
    border-bottom: 3px solid black;
    flex-direction: column;
    justify-content: center;
    & form {
      display: flex;
      flex-direction: column;
      justify-content: center;

      & label {
        visibility: hidden;
        position: absolute;
      }
    }
    & textarea {
      resize: none;
      background-color: hsla(100, 100%, 100%, 0.5);
      font-size: ${(props) => props.theme.textSizeSmallText};
      line-height: ${(props) => props.theme.lineHeightSmallText};
      line-height: calc(75px / 2);
      overflow: auto;
      text-align: center;
    }
  }

  & button {
    margin: 15px;
  }
`;

const TaskListForm = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [formError, setFormError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (event: React.FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setTitle(target.value);
  };

  useEffect(() => {
    setButtonDisabled(title === "");
  }, [title]);

  const submitForm = async () => {
    setFormError(true);
    setTitle("");
    setButtonDisabled(true);
  };

  return (
    <StyledTaskCreationForm>
      <header>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            (event.target as HTMLFormElement).reset();
          }}
        >
          <label htmlFor="title">Create new column</label>
          <textarea
            id="title"
            placeholder="write title of new column herem"
            maxLength={45}
            autoComplete="false"
            value={title ?? ""}
            onChange={handleChange}
          />
        </form>
      </header>
      <button disabled={buttonDisabled} onClick={submitForm}>
        {formError ? "Creation failed" : "Create Column"}
      </button>
    </StyledTaskCreationForm>
  );
};

export default TaskListForm;

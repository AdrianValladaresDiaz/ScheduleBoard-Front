import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Task } from "../../interfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import WidthDefinedButton from "../WidthDefinedButton/WidthDefinedButton";

const StyledDetailForm = styled.form`
  padding: 20px;
  position: relative;
  background-color: #cafbb2;
  box-shadow: 3px 3px 3px grey;
  display: flex;
  flex-direction: column;

  & #taskForm__label {
    margin-top: 15px;
    font-size: 18px;
  }
  & label {
    margin: 10px 0 10px;
    &[for="title"] {
      margin-bottom: 0;
    }
  }
  & input {
    background-color: transparent;
    border: none;
    margin-top: 10px;

    &#title {
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 25px;
      border-bottom: 2px dotted #5c7251;
    }
    &#description {
      width: 100%;
    }
    &#workHours ::after {
      content: "h.";
    }
  }
  & textarea {
    background-color: transparent;
    border: none;
    resize: none;
    font-size: ${(props) => props.theme.textSizeSmallText};
    line-height: ${(props) => props.theme.lineHeightSmallText};
    height: 200px;
    overflow: auto;
    background: repeating-linear-gradient(
      to bottom,
      #5c7251 0px,
      #5c7251 1px,
      rgba(255, 255, 255, 0) 1px,
      rgba(255, 255, 255, 0) ${(props) => props.theme.lineHeightSmallText}
    );
  }

  & > .taskForm__horizontalContainer {
    position: relative;
    width: 100%;
    & label {
      margin-right: 30px;
      min-width: 40%;
    }
    & input {
      font-size: ${(props) => props.theme.textSizeSmallText};
    }
  }

  & .discard_button_container {
    position: absolute;
    right: 15px;
  }
  & .save_button_container {
    position: absolute;
    right: 15px;
    bottom: 15px;
  }
`;

const initialFormState = {
  title: "",
  description: "",
  workHours: 0,
  dueDate: new Date(0),
  assignedTo: [] as string[],
};

interface TaskDetailProps {
  task: Task;
}

const TaskDetailForm: FC<TaskDetailProps> = ({ task }) => {
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    const { _id, ...newTask } = task;
    setFormState(newTask);
  }, [task]);

  const handleChange = (event: React.FormEvent): void => {
    const target = event.target as HTMLInputElement;
    if (target.id === "dueDate") {
      setFormState({
        ...formState,
        [target.id]: new Date(target.value),
      });
    } else {
      setFormState({
        ...formState,
        [target.id]: target.value,
      });
    }
  };

  const updateDate = (): string => {
    let outputDateString;
    try {
      outputDateString = `${formState.dueDate.toISOString().split("T")[0]}`;
    } catch {
      outputDateString = "2222-12-12";
    }
    return outputDateString;
  };

  return (
    <StyledDetailForm
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="discard_button_container">
        <WidthDefinedButton
          bigContent="X"
          title="discard changes"
          content="discard changes"
          onClickAction={() => {}}
          isDisabled={false}
        />
      </div>
      <label
        htmlFor={`title`}
        className="taskForm__label taskForm__label--title"
      >
        - Title:
      </label>
      <input
        id="title"
        type="text"
        onChange={handleChange}
        value={formState.title ?? "0"}
      />

      <label htmlFor={`description`} className="taskForm__label">
        - Description:
      </label>
      <textarea
        id={"description"}
        onChange={handleChange}
        value={formState.description ?? ""}
        autoComplete="false"
        placeholder="write the task description here"
        draggable="false"
      />
      <div className="taskForm__horizontalContainer">
        <label htmlFor={`workHours`} className="taskForm__label">
          - Required Work Hours:
        </label>
        <input
          id={"workHours"}
          type="number"
          onChange={handleChange}
          value={formState.workHours ?? 0}
        />
      </div>
      <div className="taskForm__horizontalContainer">
        <label htmlFor={`dueDate`} className="taskForm__label">
          - Due Date:
        </label>
        <input
          id={"dueDate"}
          type="date"
          onChange={handleChange}
          max="5000-01-01"
          value={updateDate()}
        />
      </div>

      <div className="save_button_container">
        <WidthDefinedButton
          bigContent="O"
          title="create task"
          content="save changes"
          onClickAction={() => {}}
          isDisabled={false}
        />
      </div>
    </StyledDetailForm>
  );
};

export default TaskDetailForm;

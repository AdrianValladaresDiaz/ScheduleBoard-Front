import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Task } from "../../interfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";

const StyledDetailForm = styled.form`
  position: relative;
  background-color: #cafbb2;
  box-shadow: 3px 3px 3px grey;
  & input {
    background-color: transparent;
    border: none;
    &.workHours ::after {
      content: "h.";
    }
  }
`;

const initialFormState = {
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
    console.log(task);
    const { _id, ...newTask } = task;
    setFormState(newTask);
    console.log(formState);
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

  return (
    <StyledDetailForm
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h3>{task.title}</h3>

      <label htmlFor={`description`}>Description</label>
      <input
        id={"description"}
        type="text"
        onChange={handleChange}
        value={formState.description ?? "0"}
      />
      <label htmlFor={`workHours`}>Description:</label>
      <input
        id={"workHours"}
        type="number"
        onChange={handleChange}
        value={formState.workHours}
      />
      <label htmlFor={`dueDate`}>Description:</label>
      <input
        id={"dueDate"}
        type="date"
        onChange={handleChange}
        value={`${formState?.dueDate.toISOString().split("T")[0]}`}
      />
      <ScheduleButton
        title="create task"
        content="+"
        onClickAction={() => {}}
        isDisabled={false}
      />
    </StyledDetailForm>
  );
};

export default TaskDetailForm;

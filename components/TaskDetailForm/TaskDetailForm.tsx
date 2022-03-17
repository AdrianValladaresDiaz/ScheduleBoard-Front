import axios from "axios";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { ScheduleBoardResponse, Task } from "../../interfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import WidthDefinedButton from "../WidthDefinedButton/WidthDefinedButton";
import StyledDetailForm from "./TaskDetailForm.styles";

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
  const [formError, setFormError] = useState(false);
  const router = useRouter();

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
      const date = new Date(formState.dueDate);
      outputDateString = `${date.toISOString().split("T")[0]}`;
    } catch {
      outputDateString = "2222-12-12";
    }
    return outputDateString;
  };

  const redirectToProject = () => {
    router.push(`/projects/${router.query.projectId}`);
  };

  const submitForm = async () => {
    try {
      const projectId = router.query.projectId;
      const taskId = router.query.taskId;

      const axiosResponse = await axios.put<ScheduleBoardResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND}task`,
        {
          params: {
            projectId,
            taskId,
          },
          data: formState,
        }
      );
      if (axiosResponse.statusText) {
        await axios.post<ScheduleBoardResponse>(
          `${process.env.NEXT_PUBLIC_FRONTEND}api/revalidate`,
          {
            data: {
              secret: process.env.NEXT_PUBLIC_ODISR,
              revalidatePath: `/task/${projectId}/${taskId}`,
            },
          }
        );
        redirectToProject();
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
    }
  };

  const clickOnError = (event: React.MouseEvent) => {
    event.stopPropagation();
    setFormError(false);
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
          onClickAction={redirectToProject}
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
          onClickAction={submitForm}
          isDisabled={false}
        />
        <ScheduleButton
          content="Something went wrong :("
          onClickAction={clickOnError}
          className={`error_button error_button--${formError}`}
        />
      </div>
    </StyledDetailForm>
  );
};

export default TaskDetailForm;

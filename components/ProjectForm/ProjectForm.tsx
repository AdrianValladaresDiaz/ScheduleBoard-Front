import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { ScheduleBoardResponse, Task } from "../../interfaces";
import { AxiosUserProjectPostResponse } from "../../interfaces/axiosResponseInterfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import WidthDefinedButton from "../WidthDefinedButton/WidthDefinedButton";
import StyledDetailForm from "./ProjectForm.styles";

const initialFormState = {
  title: "",
  dueDate: new Date(0),
};

const ProjectForm = (): JSX.Element => {
  const [cookies] = useCookies();
  const [formState, setFormState] = useState(initialFormState);
  const [formError, setFormError] = useState(false);

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

  const handleSuccess = () => {
    console.log("WOOOHOOOO");
  };

  const submitForm = async () => {
    try {
      const token = cookies[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME as string];

      const axiosResponse = await axios.post<AxiosUserProjectPostResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND}userProjects`,
        {
          data: {
            title: formState.title,
            dueDate: formState.dueDate,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (axiosResponse.status === 201) {
        handleSuccess();
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
      <label
        htmlFor={`title`}
        className="project-form project-form__label--title"
      >
        - Title:
      </label>
      <input
        id="title"
        type="text"
        onChange={handleChange}
        value={formState.title ?? "0"}
      />

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

      <div
        className={`save_button_container save_button_container--${formError}`}
      >
        <WidthDefinedButton
          bigContent="O"
          title="create task"
          content="save changes"
          onClickAction={submitForm}
          isDisabled={formError}
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

export default ProjectForm;

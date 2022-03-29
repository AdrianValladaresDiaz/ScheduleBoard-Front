import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Project, ScheduleBoardResponse } from "../../interfaces";
import { RootState } from "../../redux/store";
import { addTaskListThunk } from "../../redux/thunks/projectThunks";
import textSizes from "../../styles/textSizes";

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
      font-size: ${textSizes.textSizeSmallText};
      line-height: ${textSizes.lineHeightSmallText};
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
  const [cookies] = useCookies();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("Create column");

  const project: Project = useSelector<RootState>(
    (state) => state.project
  ) as Project;

  const handleChange = (event: React.FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setTitle(target.value);
  };

  useEffect(() => {
    setButtonDisabled(title === "");
  }, [title]);

  const submitForm = async () => {
    const token = cookies[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME as string];

    const thunkResult: any = dispatch(
      addTaskListThunk(title, token, project.id)
    );

    if (thunkResult) {
      handleSuccess();
    } else {
      handleFailure();
    }
  };

  const handleSuccess = async () => {
    await axios.post<ScheduleBoardResponse>(
      `${process.env.NEXT_PUBLIC_FRONTEND}api/revalidate`,
      {
        data: {
          secret: process.env.NEXT_PUBLIC_ODISR,
          revalidatePath: `/projects/${project.id}`,
        },
      }
    );
    setTitle("");
    setButtonText("Create column");
    setButtonDisabled(true);
  };

  const handleFailure = () => {
    setTitle("");
    setButtonText("Creation failed");
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
        {buttonText}
      </button>
    </StyledTaskCreationForm>
  );
};

export default TaskListForm;

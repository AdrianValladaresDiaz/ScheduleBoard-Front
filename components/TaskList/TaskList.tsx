import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Project, TaskList } from "../../interfaces";
import { RootState } from "../../redux/store";
import { createTaskThunk } from "../../redux/thunks/projectThunks";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import TaskCard from "../TaskCard/TaskCard";

interface TaskListProps {
  taskList: TaskList;
}

const StyledTaskList = styled.article`
  border-color: black;
  border-right: 4px solid black;
  display: flex;
  flex-direction: column;
  max-width: 200px;

  & header {
    overflow: hidden;
    height: 75px;
    border-bottom: 3px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > h3 {
      text-align: center;
      line-height: 30px;
    }
  }
`;

const StyledOrderedList = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const TaskList = ({ taskList }: TaskListProps): JSX.Element => {
  const dispatch = useDispatch();
  const { title, tasks, id } = taskList;
  const project: Project = useSelector<RootState>(
    (state) => state.project
  ) as Project;
  const [createButtonEnabled, setCreateButtonEnabled] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const formHasContent = (target: HTMLInputElement): boolean => {
    return target.value !== "";
  };

  const handleFormChange = (event: React.FormEvent): void => {
    setCreateButtonEnabled(formHasContent(event.target as HTMLInputElement));
    setNewTaskTitle((event.target as HTMLInputElement).value);
  };

  const handleCreateClick = (): void => {
    dispatch(createTaskThunk(project.id, taskList.id, newTaskTitle));
  };

  return (
    <StyledTaskList>
      <header>
        <h3>{title}</h3>
      </header>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          (event.target as HTMLFormElement).reset();
        }}
      >
        <label htmlFor={`taskList ${id}`}>Write title of new task</label>
        <input id={`taskList ${id}`} type="text" onChange={handleFormChange} />
        <ScheduleButton
          title="create task"
          content="+"
          onClickAction={handleCreateClick}
          isDisabled={!createButtonEnabled}
        />
      </form>
      <StyledOrderedList>
        {tasks.map((task) => (
          <TaskCard key={task.id} taskInfo={task} />
        ))}
      </StyledOrderedList>
    </StyledTaskList>
  );
};

export default TaskList;

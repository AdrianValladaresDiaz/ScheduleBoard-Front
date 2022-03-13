import styled from "styled-components";
import { ITaskList } from "../../interfaces";
import Task from "../Task/Task";

interface TaskListProps {
  taskList: ITaskList;
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
  const { title, tasks } = taskList;
  return (
    <StyledTaskList>
      <header>
        <h3>{title}</h3>
      </header>
      <StyledOrderedList>
        {tasks.map((task) => (
          <Task key={task._id} taskInfo={task} />
        ))}
      </StyledOrderedList>
    </StyledTaskList>
  );
};

export default TaskList;

import { title } from "process";
import styled from "styled-components";
import { TaskList } from "../../interfaces/backendResponseInterfaces";

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
    height: 90px;
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
  & > li {
    width: 300px;
  }
`;

const TaskList = ({ taskList }: TaskListProps): JSX.Element => {
  const { title, tasks } = taskList;
  return (
    <StyledTaskList>
      <header>
        <h3>{title}</h3>
      </header>
      <ol>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ol>
      ;
    </StyledTaskList>
  );
};

export default TaskList;

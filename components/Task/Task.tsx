import styled from "styled-components";
import { ITask } from "../../interfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import { useDispatch } from "react-redux";
import { deleteTaskThunk } from "../../redux/thunks/projectThunks";

interface TaskProps {
  taskInfo: ITask;
}

const TaskCard = styled.li`
  background-color: #b2d4fb;
  margin: 5px;
  padding: 5px;
  & h3 {
    text-decoration: underline;
    font-size: ${(props) => props.theme.textSizeSmallTitle};
  }
  & p {
    line-height: 20px;
    font-size: ${(props) => props.theme.textSizeSmallText};
  }
`;

const Task = ({ taskInfo }: TaskProps): JSX.Element => {
  const { title, description, _id } = taskInfo;
  const dispatch = useDispatch();

  const deleteTask = async () => {
    dispatch(deleteTaskThunk(_id));
  };

  return (
    <TaskCard className="task">
      <h3>{title}</h3>
      <p>
        {description.length > 35
          ? description.slice(0, 35) + "..."
          : description}
      </p>
      <ScheduleButton content="X" onClickAction={deleteTask} />
    </TaskCard>
  );
};

export default Task;

import styled from "styled-components";
import { Project, Task } from "../../interfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskThunk } from "../../redux/thunks/projectThunks";
import { RootState } from "../../redux/store";
import Link from "next/link";
import { GiHighlighter } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";

interface TaskProps {
  taskInfo: Task;
}

const StyledCard = styled.li`
  background-color: #b2d4fb;
  margin: 5px;
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  box-shadow: 0 2px 2px grey;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .button-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  & h3 {
    text-decoration: underline;
    font-size: ${(props) => props.theme.textSizeSmallTitle};
    text-align: center;
    line-height: ${(props) => props.theme.textSizeSmallTitle};
  }
  & p {
    line-height: 20px;
    font-size: ${(props) => props.theme.textSizeSmallText};
  }
  & button {
    background-color: transparent;
    border: none;
    font-size: ${(props) => props.theme.textSizeSmallText};
    cursor: pointer;
  }
  & svg,
  svg:visited,
  svg:active {
    font-size: ${(props) => props.theme.textSizeMedium};
    cursor: pointer;
    color: black;
  }
`;

const TaskCard = ({ taskInfo }: TaskProps): JSX.Element => {
  const { title, description, id: taskId } = taskInfo;
  const project: Project = useSelector<RootState>(
    (state) => state.project
  ) as Project;
  const dispatch = useDispatch();

  const deleteTask = async () => {
    dispatch(deleteTaskThunk(taskId, project.id));
  };

  return (
    <StyledCard className="task">
      <h3>{title}</h3>
      <p>
        {description?.length > 35
          ? description.slice(0, 35) + "..."
          : description}
      </p>

      <div className="button-container">
        <ScheduleButton
          content={<RiDeleteBin5Line />}
          onClickAction={deleteTask}
          isDisabled={false}
        />
        <Link href={`/task/${project.id}/${taskId}`} passHref>
          <a>
            <GiHighlighter />
          </a>
        </Link>
      </div>
    </StyledCard>
  );
};

export default TaskCard;

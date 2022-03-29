import styled from "styled-components";
import { Project, Task } from "../../interfaces";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskThunk } from "../../redux/thunks/projectThunks";
import { RootState } from "../../redux/store";
import Link from "next/link";
import { GiHighlighter } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";
import dimensions from "../../styles/dimensions";

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
    & span {
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }
  & h3 {
    text-decoration: underline;
    font-size: ${dimensions.textSizeSmallTitle};
    text-align: center;
    line-height: ${dimensions.textSizeSmallTitle};
  }
  & p {
    line-height: 20px;
    font-size: ${dimensions.textSizeSmallText};
  }
  & button {
    background-color: transparent;
    border: none;
    font-size: ${dimensions.textSizeSmallText};
    cursor: pointer;
  }
  & svg,
  svg:visited,
  svg:active {
    font-size: ${dimensions.textSizeMedium};
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
          content={
            <>
              <RiDeleteBin5Line />
              <span>delete task button</span>
            </>
          }
          onClickAction={deleteTask}
          isDisabled={false}
        />
        <Link href={`/task/${project.id}/${taskId}`} passHref>
          <a aria-label="task detail and edit page">
            <GiHighlighter />
          </a>
        </Link>
      </div>
    </StyledCard>
  );
};

export default TaskCard;

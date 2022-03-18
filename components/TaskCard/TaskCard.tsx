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
  & h3 {
    text-decoration: underline;
    font-size: ${(props) => props.theme.textSizeSmallTitle};
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
  & svg {
    font-size: ${(props) => props.theme.textSizeSmallText};
    cursor: pointer;
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
    </StyledCard>
  );
};

export default TaskCard;

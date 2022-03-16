import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { FC } from "react";
import TaskDetailForm from "../../../components/TaskDetailForm/TaskDetailForm";
import { ScheduleBoardResponse, Task } from "../../../interfaces";

interface TaskDetailProps {
  error: boolean;
  message: Task;
}

const TaskDetail: FC<TaskDetailProps> = (props) => {
  const { error, message } = props;

  return (
    (error === false && (
      <TaskDetailForm
        task={{
          _id: message._id,
          assignedTo: message.assignedTo,
          title: message.title,
          description: message.description,
          workHours: message.workHours,
          dueDate: message.dueDate,
        }}
      />
    )) || <h3>page not found</h3>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          projectId: "000000000000000000000000",
          taskId: "000000000000000000000000",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const projectId = context.params?.projectId as string;
  const taskId = context.params?.taskId as string;
  let response: ScheduleBoardResponse;

  try {
    const axiosResponse = await axios.get<ScheduleBoardResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND}task`,
      { params: { projectId, taskId } }
    );
    response = axiosResponse.data;
  } catch (error: any) {
    response = {
      error: true,
      message: `${error.toJSON()}`,
    };
  }
  return { props: response };
};
export default TaskDetail;

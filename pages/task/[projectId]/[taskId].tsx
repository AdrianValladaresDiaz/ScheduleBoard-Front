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
  return (
    <TaskDetailForm
      task={{
        _id: "622c8df95a8ee80141edf60d",
        assignedTo: [],
        title: "task title 3",
        description: "an arbitratily long description, in string form 3",
        workHours: 84,
        dueDate: new Date(2009),
      }}
    />
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

  return { props: {} };
};
export default TaskDetail;

import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { FC } from "react";
import { ScheduleBoardResponse, Task } from "../../../interfaces";

interface TaskDetailProps {
  error: boolean;
  message: Task;
}

const TaskDetail: FC<TaskDetailProps> = (props) => {
  return <div>wooohoooo</div>;
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

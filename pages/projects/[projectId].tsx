import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TaskList from "../../components/TaskList/TaskList";
import {
  Project,
  ScheduleBoardResponse,
} from "../../interfaces/backendResponseInterfaces";

interface ProjectPageProps {
  error: boolean;
  message: Project;
}

const ProjectPage = ({ error, message }: ProjectPageProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    if (error) {
      router.push("/home");
    }
  });

  return (
    <div>
      {message?.taskLists && <TaskList taskList={message.taskLists[0]} />}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { projectId: "000000000000000000000000" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const projectId = context.params?.projectId as string;
  let response: ScheduleBoardResponse;

  try {
    const axiosResponse = await axios.get<ScheduleBoardResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND}project`,
      { params: { projectId } }
    );
    console.log(axiosResponse.data);
    response = axiosResponse.data;
  } catch {
    response = {
      error: true,
      message: "something went wrong",
    };
  }

  return {
    props: response,
  };
};

export default ProjectPage;

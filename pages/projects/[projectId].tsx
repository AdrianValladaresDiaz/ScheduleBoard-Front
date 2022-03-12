import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  AxiosProjectGetResponseInterface,
  ProjectInterface,
  ScheduleBoardResponse,
} from "../../interfaces/backendResponseInterfaces";

interface ProjectPageProps {
  error: boolean;
  message: ProjectInterface;
}

const ProjectPage = ({ error, message }: ProjectPageProps): JSX.Element => {
  console.log(message);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      router.push("/home");
    }
  });

  return <div></div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
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

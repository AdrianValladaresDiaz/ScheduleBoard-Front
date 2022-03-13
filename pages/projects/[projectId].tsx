import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import type { Project, ScheduleBoardResponse } from "../../interfaces";
import TaskList from "../../components/TaskList/TaskList";

const StyledProject = styled.div`
  display: flex;
  position: relative;
`;

const LeftBorder = styled.div`
  border-left: 4px solid black;
`;

interface ProjectPageProps {
  error: boolean;
  message: Project;
}

const ProjectPage = ({ error, message }: ProjectPageProps): JSX.Element => {
  const router = useRouter();
  const taskLists = message?.taskLists;

  useEffect(() => {
    if (error) {
      router.push("/home");
    }
  });

  return (
    <StyledProject>
      {taskLists && <LeftBorder className="left-border" />}
      {taskLists &&
        taskLists.map((taskList) => (
          <TaskList key={taskList._id} taskList={taskList} />
        ))}
    </StyledProject>
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

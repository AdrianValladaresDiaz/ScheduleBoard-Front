import TaskList from "../../components/TaskList/TaskList";
import type { Project, ScheduleBoardResponse } from "../../interfaces";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { loadProjectAction } from "../../redux/actions/actionCreators";
import { useCookies } from "react-cookie";
import TaskListForm from "../../components/TaskListForm/TaskListForm";

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
  const [cookies] = useCookies();
  const router = useRouter();
  const dispatch = useDispatch();
  const project: Project = useSelector<RootState>(
    (state) => state.project
  ) as Project;

  useEffect(() => {
    if (error) {
      router.push("/home");
    }
  }, [error, router]);

  useEffect(() => {
    dispatch(loadProjectAction(message));
  }, [dispatch, message]);

  const clickMe = async () => {
    const token = cookies[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME as string];

    const axiosResponse = await axios.post<ScheduleBoardResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND}project/createTaskList`,
      {
        data: {
          title: "new title",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          projectId: project.id,
        },
      }
    );
    console.log(axiosResponse);
  };

  return (
    <>
      <button onClick={clickMe}>click me</button>
      <StyledProject>
        {project && <LeftBorder className="left-border" />}
        {project &&
          project.taskLists?.map((taskList) => (
            <TaskList key={taskList.id} taskList={taskList} />
          ))}
        <TaskListForm />
      </StyledProject>
    </>
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
    response = axiosResponse.data;
  } catch (error: any) {
    response = {
      error: true,
      message: `${error.toJSON()}`,
    };
  }
  return {
    props: response,
  };
};

export default ProjectPage;

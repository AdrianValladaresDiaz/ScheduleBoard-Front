import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import ProjectMiniature from "../../components/ProjectMiniature/ProjectMiniature";
import { AxiosUserProjectsGetResponse, ProjectInfo } from "../../interfaces";
import { loadUserProjectsAction } from "../../redux/actions/actionCreators";
import { RootState } from "../../redux/store";
import checkToken from "../../utils/checkToken";
import getToken from "../../utils/getToken";

interface HomeProps {
  data: any;
}

const StyledUl = styled.ul`
  width: 100%;
  overflow-y: auto;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 80vh;
  & > li {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  @media (min-width: 715px) {
    min-width: 700px;
    max-width: 1150px;
    display: grid;
    gap: 10px;
    grid-auto-rows: min-content;
    grid-template-columns: 1fr 1fr;
    & > li {
      width: 100%;
    }
  }
`;

const Home = ({ data: { projects } }: HomeProps): JSX.Element => {
  const dispatch = useDispatch();
  const userProjects = useSelector<RootState>(
    (state) => state.userProjects
  ) as ProjectInfo[];

  useEffect(() => {
    dispatch(loadUserProjectsAction(projects));
  }, [dispatch, projects]);

  return (
    <>
      <ProjectForm />
      <StyledUl>
        {userProjects.map((project: any) => (
          <li key={project.id}>
            <ProjectMiniature project={project} />
          </li>
        ))}
      </StyledUl>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = getToken(context.req?.headers.cookie as string);
  let data: any = undefined;

  const authenticated: boolean = await checkToken(
    context.req?.headers.cookie as string
  );

  if (!authenticated) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
  } else {
    const backendResponse = await axios.get<AxiosUserProjectsGetResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND}userProjects`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    data = backendResponse.data.message;
  }
  return {
    props: {
      data,
    },
  };
};
export default Home;

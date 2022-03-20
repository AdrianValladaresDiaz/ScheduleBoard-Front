import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProjectMiniature from "../../components/ProjectMiniature/ProjectMiniature";
import { AxiosUserProjectsGetResponse, ProjectInfo } from "../../interfaces";
import { loadUserProjects } from "../../redux/actions/actionCreators";
import { RootState } from "../../redux/store";
import checkToken from "../../utils/checkToken";
import getToken from "../../utils/getToken";

interface HomeProps {
  data: any;
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: realative;
  & > li {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  @media (min-width: 715px) {
    min-width: 700px;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    & > li {
      width: 100%;
    }
  }
`;

const Home = ({ data: { projects } }: HomeProps): JSX.Element => {
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const userProjects = useSelector<RootState>(
    (state) => state.userProjects
  ) as ProjectInfo[];

  useEffect(() => {
    dispatch(loadUserProjects(projects));
  }, [dispatch, projects]);

  const createProjectFetch = async () => {
    const token = cookies[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME as string];
    console.log(token);
    const backendResponse = await axios.post<AxiosUserProjectsGetResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND}userProjects`,
      {
        data: {
          title: "title from frontend",
          dueDate: new Date("2222-12-12"),
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = backendResponse.data.message;
  };
  console.log(userProjects);
  return (
    <>
      <StyledUl>
        {userProjects.map((project: any) => (
          <li key={project.id}>
            <ProjectMiniature project={project} />
          </li>
        ))}
      </StyledUl>
      <button onClick={createProjectFetch}>click me gently</button>
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
  console.log("DATA HERE");
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
export default Home;

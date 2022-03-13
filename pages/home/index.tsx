import axios from "axios";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import ProjectMiniature from "../../components/ProjectMiniature/ProjectMiniature";
import { AxiosUserProjectsGetResponse } from "../../interfaces";
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
`;

const Home = ({ data: { projects } }: HomeProps): JSX.Element => {
  return (
    <StyledUl>
      {projects.map((project: any) => (
        <li key={project.title}>
          <ProjectMiniature project={project} />
        </li>
      ))}
    </StyledUl>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = getToken(context.req?.headers.cookie as string);
  let data: any = null;

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

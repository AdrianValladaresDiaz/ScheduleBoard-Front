import axios from "axios";
import { GetServerSideProps } from "next";
import { NextRouter, Router } from "next/router";
import { Cookies } from "react-cookie";
import { AxiosUserProjectsGetResponseInterface } from "../../interfaces/backendResponseInterfaces";

interface HomeProps {
  projects: any;
}

const Home = ({ projects }: HomeProps): JSX.Element => {
  const f = projects;
  console.log(f);
  return (
    <>
      <article>{projects.toString()}</article>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies: Cookies = new Cookies();

  let token: string | undefined = cookies.get("SCHEDULE_BOARD_TOKEN");
  if (!token) {
    token = process.env.DEV_JWT_TOKEN;
  }

  let projects;

  try {
    const backendResponse =
      await axios.get<AxiosUserProjectsGetResponseInterface>(
        `${process.env.NEXT_PUBLIC_BACKEND}userProjects`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

    if (backendResponse.data.error) {
      context.res.writeHead(302, { Location: "/login" });
      context.res.end();
      projects = null;
    }
    projects = backendResponse.data;
  } catch {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    projects = null;
  }

  return {
    props: {
      projects,
    },
  };
};
export default Home;

import axios from "axios";
import { GetServerSideProps } from "next";
import { NextRouter, Router } from "next/router";
import { Cookies } from "react-cookie";
import { AxiosUserProjectsGetResponseInterface } from "../../interfaces/backendResponseInterfaces";
import checkToken from "../../utils/checkToken";
import getToken from "../../utils/getToken";

interface HomeProps {
  data: any;
}

const Home = ({ data: { projects } }: HomeProps): JSX.Element => {
  return (
    <>
      {projects.map((project: any) => (
        <>
          <p key={project.title}>{project.title}</p>
          <p key={project.dueDate}>{project.dueDate}</p>
        </>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = getToken();
  let data: any = null;

  const authenticated: boolean = await checkToken();
  if (!authenticated) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
  } else {
    const backendResponse =
      await axios.get<AxiosUserProjectsGetResponseInterface>(
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

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

interface ProjectPageProps {
  data: {
    title: string;
  };
}

const ProjectPage = ({ data }: ProjectPageProps): JSX.Element => {
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
  const projectId = context.params?.projectId;
  return {
    props: { data: { title: "my title" } },
  };
};

export default ProjectPage;

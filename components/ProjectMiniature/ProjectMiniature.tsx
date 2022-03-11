import Link from "next/link";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";

const StyledProjectMiniature = styled.article`
  margin-top: ${(props) => props.theme.lateralPadding};
  background-color: ${(props) => props.theme.backgroundItem};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  max-width: 700px;
  width: 100%;
  & .project-info {
    margin: ${(props) => props.theme.lateralPadding};

    & h3 {
      font-size: 18px;
      text-decoration: underline;
    }
  }

  & .team-members {
    margin: ${(props) => props.theme.lateralPadding};

    display: flex;
    &--title::after {
      content: ":";
    }
    &--list {
      display: flex;
      flex-wrap: nowrap;
      list-style: none;
      & > * {
        margin-left: 6px;
      }
    }
  }
`;

interface ProjectMiniatureProps {
  project: {
    title: string;
    dueDate: string;
    users: {
      name: string;
      surname: string;
      id: string;
    }[];
    id: string;
  };
}

const ProjectMiniature = ({ project }: ProjectMiniatureProps): JSX.Element => {
  const { title, dueDate, users, id } = project;
  let date = new Date(dueDate);
  return (
    <Link href={`/projects/${id}`} passHref>
      <StyledProjectMiniature>
        <div className="project-info">
          <h3> {title}</h3>
          <p>
            {`Due date: ${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`}
          </p>
        </div>
        <div className="team-members">
          <h4 className="team-members team-members--title">team</h4>
          <ul className="team-members team-members--list">
            {users.map((user) => (
              <li key={user.id}>
                <Avatar
                  letters={`${user.name[0].toUpperCase()}${user.surname[0].toUpperCase()}`}
                  color="#b2d4fb"
                />
              </li>
            ))}
          </ul>
        </div>
      </StyledProjectMiniature>
    </Link>
  );
};

export default ProjectMiniature;

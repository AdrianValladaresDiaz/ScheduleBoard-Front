import Link from "next/link";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";

const StyledProjectMiniature = styled.article`
  position: relative;
  margin-top: ${(props) => props.theme.lateralPadding};
  background-color: ${(props) => props.theme.backgroundItem};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  max-width: 700px;
  width: 100%;
  cursor: pointer;

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
  @media (max-width: 715px) {
    &:active {
      box-shadow: 2px 3px 4px #ec00005e, -2px -3px 2px #ec00005e,
        -2px 3px 2px #ec00005e, 2px -3px 2px #ec00005e;
    }
  }

  @media (min-width: 715px) {
    &::after {
      content: "";
      z-index: -1;
      height: 35%;
      width: 100%;
      position: absolute;
      background-color: #ec0000;
    }

    &:hover::after {
      transition: all 200ms ease-in;
      transform: translate(10px);
    }
    &:active::after {
      transition: all 200ms ease-in;
      transform: translate(20px);
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

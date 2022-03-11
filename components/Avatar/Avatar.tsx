import styled from "styled-components";
import * as textSizes from "../../styles/textSizes";
import * as dimensions from "../../styles/dimensions";

const StyledAvatar = styled.div`
  display: flex;
  height: ${dimensions.avatarSize};
  width: ${dimensions.avatarSize};
  background-color: ${(props) => props.color ?? props.theme.background};
  border-radius: 5px;
  align-content: center;
  justify-content: center;

  & p {
    padding-top: 3px;
    font-size: ${textSizes.medium};
    font-family: ${(props) => props.theme.avatarFont};
  }
`;

interface AvatarProps {
  letters: string;
  color?: string;
}

const Avatar = ({ letters, color = undefined }: AvatarProps): JSX.Element => {
  return (
    <StyledAvatar color={color}>
      <p>{letters}</p>
    </StyledAvatar>
  );
};

export default Avatar;

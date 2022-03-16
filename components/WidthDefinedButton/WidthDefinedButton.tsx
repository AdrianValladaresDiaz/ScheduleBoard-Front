import React from "react";
import styled from "styled-components";

const GnarlyButton = styled.button`
  cursor: pointer;
  display: flex;
  background-color: transparent;
  border: none;
  align-items: center;
  & .content {
    font-size: ${(props) => props.theme.textSizeSmallText};
    line-height: ${(props) => props.theme.textSizeSmallText};
    width: min-content;
    margin-right: 5px;
    border-bottom: 2px solid black;
  }
  & .bigContent {
    font-size: 40px;
  }
`;

interface WidthDefinedButtonProps {
  onClickAction: Function;
  content: string | JSX.Element;
  bigContent: string;
  isDisabled?: boolean;
  title?: string;
}

const WidthDefinedButton = ({
  onClickAction,
  content,
  bigContent,
  isDisabled = false,
  title = "",
}: WidthDefinedButtonProps): JSX.Element => {
  return (
    <GnarlyButton
      title={title}
      disabled={isDisabled}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickAction()}
    >
      <div className="content">{content}</div>
      <div className="bigContent">{bigContent}</div>
    </GnarlyButton>
  );
};

export default WidthDefinedButton;

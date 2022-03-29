import React from "react";
import styled from "styled-components";
import textSizes from "../../styles/textSizes";

const GnarlyButton = styled.button`
  cursor: pointer;
  display: flex;
  background-color: transparent;
  border: none;
  align-items: center;
  & .content {
    font-size: ${textSizes.textSizeSmallText};
    line-height: ${textSizes.textSizeSmallText};
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
  className?: string;
}

const WidthDefinedButton = ({
  onClickAction,
  content,
  bigContent,
  isDisabled = false,
  title = "",
  className = "",
}: WidthDefinedButtonProps): JSX.Element => {
  return (
    <GnarlyButton
      title={title}
      disabled={isDisabled}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickAction()}
      className={className}
    >
      <div className="content">{content}</div>
      <div className="bigContent">{bigContent}</div>
    </GnarlyButton>
  );
};

export default WidthDefinedButton;

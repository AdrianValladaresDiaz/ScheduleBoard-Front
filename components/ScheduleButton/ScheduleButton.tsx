import React from "react";

interface ScheduleButtonProps {
  onClickAction: Function;
  content: string | JSX.Element;
  isDisabled?: boolean;
  title?: string;
}

const ScheduleButton = ({
  onClickAction,
  content,
  isDisabled = false,
  title = "",
}: ScheduleButtonProps): JSX.Element => {
  return (
    <button
      title={title}
      disabled={isDisabled}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickAction()}
    >
      {content}
    </button>
  );
};

export default ScheduleButton;

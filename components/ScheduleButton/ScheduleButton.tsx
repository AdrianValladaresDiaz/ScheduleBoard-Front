import React from "react";

interface ScheduleButtonProps {
  onClickAction: Function;
  content: string | JSX.Element;
  isDisabled: boolean;
}

const ScheduleButton = ({
  onClickAction,
  content,
  isDisabled,
}: ScheduleButtonProps): JSX.Element => {
  return (
    <button
      disabled={isDisabled}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickAction()}
    >
      {content}
    </button>
  );
};

export default ScheduleButton;

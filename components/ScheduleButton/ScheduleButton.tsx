import React from "react";

interface ScheduleButtonProps {
  onClickAction: Function;
  content: string | JSX.Element;
}

const ScheduleButton = ({
  onClickAction,
  content,
}: ScheduleButtonProps): JSX.Element => {
  return (
    <button
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickAction()}
    >
      {content}
    </button>
  );
};

export default ScheduleButton;

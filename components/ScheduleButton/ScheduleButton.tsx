import React from "react";

interface ScheduleButtonProps {
  onClickAction: Function;
  content: string | JSX.Element;
  isDisabled?: boolean;
  title?: string;
  className?: string;
  ariaLabel?: string;
}

const ScheduleButton = ({
  onClickAction,
  content,
  isDisabled = false,
  title = "",
  className = "",
  ariaLabel = "",
}: ScheduleButtonProps): JSX.Element => {
  return (
    <button
      title={title}
      disabled={isDisabled}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
        onClickAction(event)
      }
      className={className}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default ScheduleButton;

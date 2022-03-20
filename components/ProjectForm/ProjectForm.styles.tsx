import styled from "styled-components";

const StyledProjectForm = styled.form`
  padding: 20px;
  position: relative;
  background-color: #cafbb2;
  box-shadow: 3px 3px 3px grey;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 550px;

  & #taskForm__label {
    margin-top: 15px;
    font-size: 18px;
  }

  & label {
    margin: 10px 0 10px;
    &[for="title"] {
      margin-bottom: 0;
    }
  }

  & input {
    background-color: transparent;
    border: none;
    margin-top: 10px;

    &#title {
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 25px;
      border-bottom: 2px dotted #5c7251;
    }
    &#description {
      width: 100%;
    }
    &#workHours ::after {
      content: "h.";
    }
  }

  & textarea {
    background-color: transparent;
    border: none;
    resize: none;
    font-size: ${(props) => props.theme.textSizeSmallText};
    line-height: ${(props) => props.theme.lineHeightSmallText};
    height: 200px;
    overflow: auto;
    background: repeating-linear-gradient(
      to bottom,
      #5c7251 0px,
      #5c7251 1px,
      rgba(255, 255, 255, 0) 1px,
      rgba(255, 255, 255, 0) ${(props) => props.theme.lineHeightSmallText}
    );
  }

  & > .taskForm__horizontalContainer {
    position: relative;
    width: 100%;
    & label {
      margin-right: 30px;
      min-width: 40%;
    }
    & input {
      font-size: ${(props) => props.theme.textSizeSmallText};
    }
  }

  & .discard_button_container {
    box-sizing: border-box;
    position: absolute;
    right: 15px;
    padding: 0 15px;
    &:hover {
      border: 2px dotted black;
      transform: translateX(2px) translateY(-2px);
      &:active {
        background-color: ${(props) => props.theme.background};
        box-shadow: inset 3px 3px 3px grey;
      }
    }
  }

  & .save_button_container {
    position: absolute;
    right: 15px;
    bottom: 15px;
    padding: 0 15px;
    &:hover {
      border: 2px dotted black;
      transform: translateX(2px) translateY(2px);
      &:active {
        background-color: ${(props) => props.theme.background};
        box-shadow: inset 3px 3px 3px grey;
      }
    }

    & > .error_button {
      position: absolute;
      top: 5px;
      right: -10px;
      transform: rotateZ(15deg);
      background-color: ${(props) => props.theme.accent};
      font-size: ${(props) => props.theme.textSizeSmallText};
      width: 135px;
      visibility: hidden;
      &--true {
        visibility: visible;
      }
    }

    &--true {
      &:hover {
        border: none;
        &:active {
          background-color: transparent;
          box-shadow: none;
        }
      }
    }
  }
`;

export default StyledProjectForm;

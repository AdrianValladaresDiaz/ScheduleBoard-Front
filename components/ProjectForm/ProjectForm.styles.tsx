import styled from "styled-components";

const StyledProjectForm = styled.form`
  padding: 20px;
  z-index: 4;
  position: relative;
  background-color: #cafbb2;
  box-shadow: 2px 2px 2px grey;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 1 auto;
  width: 100%;

  & > .taskForm__horizontalContainer {
    position: relative;
    display: flex;
    width: 100%;
    & label {
      margin-right: 30px;
    }
    & input {
      font-size: ${(props) => props.theme.textSizeSmallText};
    }
  }

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
      font-size: ${(props) => props.theme.textSizeSmallText};
      border-bottom: 2px dotted #5c7251;
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

  @media (min-width: 715px) {
    min-width: 700px;
    max-width: 1150px;
  }
`;

export default StyledProjectForm;

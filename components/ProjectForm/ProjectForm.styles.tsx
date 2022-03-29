import styled from "styled-components";
import dimensions from "../../styles/dimensions";

const StyledProjectForm = styled.form`
  padding: 10px 15px;
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
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 55px;
    & > div {
    }
    & label {
      margin-right: 30px;
      margin: 10px 0 10px;
      &[for="title"] {
        word-wrap: none;
        margin-bottom: 0;
      }
      &[for="dueDate"] {
        width: max-content;
      }
    }
    & input {
      font-size: ${dimensions.textSizeSmallText};
    }
  }

  & #taskForm__label {
    margin-top: 15px;
    font-size: 18px;
  }

  & input {
    background-color: transparent;
    border: none;

    &#title {
      margin-top: 10px;
      margin-top: 0;
      margin-bottom: 5px;
      font-size: ${dimensions.textSizeSmallText};
      border-bottom: 2px dotted #5c7251;
    }
  }

  & .save_button_container {
    position: relative;
    padding: 0 5px;
    height: 50px;
    &:hover {
      border: 2px dotted black;
      transform: translateX(2px) translateY(-2px);
      &:active {
        background-color: ${(props) => props.theme.background};
        box-shadow: inset 3px 3px 3px grey;
      }
    }
    & .bigContent {
      height: 50px;
      padding: 0;
    }

    & > .error_button {
      position: absolute;
      top: 5px;
      right: -10px;
      transform: rotateZ(15deg);
      background-color: ${(props) => props.theme.accent};
      font-size: ${dimensions.textSizeSmallText};
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    & > .taskForm__horizontalContainer {
      justify-content: space-around;
      flex-direction: column;
      width: 45%;
      & > label {
        width: 35%;
        &#dueDate {
          max-width: 150px;
        }
      }

      & input#dueDate {
        width: 150px;
      }
    }

    & .save_button_container {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
`;

export default StyledProjectForm;

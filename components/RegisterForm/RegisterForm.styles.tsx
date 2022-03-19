import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  padding: 20px;
  position: relative;
  background-color: ${(props) => props.theme.softGreen};
  box-shadow: 3px 3px 3px grey;
  box-shadow: 0 0 15px grey;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 550px;

  & .register-form__input-container {
    display: flex;
    align-items: center;
    margin: 10px 0 0 10px;

    & label {
      width: 100px;
      font-size: ${(props) => props.theme.textSizeMedium};
    }
    & input {
      width: 180px;
      margin-left: 30px;
      padding-left: 20px;
      background-color: transparent;
      border: none;
      border-bottom: 2px dotted black;
      font-size: ${(props) => props.theme.textSizeSmallText};
      height: ${(props) => props.theme.lineHeightSmallText};
    }
  }

  & .register-button-container {
    width: 100%;
    position: relative;
    height: 75px;
    display: flex;
    justify-content: end;
    & .submit-button {
      font-size: ${(props) => props.theme.textSizeMedium};
      border: none;
      padding: 0 15px;
      background-color: transparent;
      text-decoration: underline;
      &:hover {
        border: 2px dotted black;
        transform: translateX(2px);
        &:active {
          background-color: ${(props) => props.theme.background};
          box-shadow: inset 3px 3px 3px grey;
        }
      }
      &:disabled {
        text-decoration: none;
        &:hover {
          border: none;
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
  }

  & .register-form__success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 325px;
    & > * {
      margin-top: 15px;
      text-align: center;
      transform: rotateZ(-30deg);
    }
    & h3 {
      width: min-content;
      font-size: 60px;
      line-height: 70px;
      border-top: 5px solid darkgreen;
      border-bottom: 5px solid darkgreen;
      color: darkgreen;
    }
    & p {
      text-align: center;
    }
  }
`;

export const StyledRegisterContainer = styled.main`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.textSizeMedium};

  & > nav > ul {
    list-style: none;
    display: flex;
    & > li.register_nav {
      background-color: ${(props) => props.theme.softGreen};
      margin-right: 30px;
      padding: 5px 15px;
      min-width: 100px;
      text-align: center;
      &--login {
        background-color: ${(props) => props.theme.softBlue};
        margin-left: 10px;
        box-shadow: 0 0 15px grey;
        clip-path: inset(-15px -15px 0 -15px);
      }
      &--register {
        background-color: ${(props) => props.theme.softGreen};
        z-index: 50;
        margin-left: 10px;
        box-shadow: 0 0 15px grey;
        clip-path: inset(-15px -15px 0 -15px);
      }
      & a:visited {
        color: black;
      }
    }
  }
`;

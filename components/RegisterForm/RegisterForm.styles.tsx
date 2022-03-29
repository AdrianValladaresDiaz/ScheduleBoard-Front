import styled from "styled-components";
import dimensions from "../../styles/dimensions";

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
      font-size: ${dimensions.textSizeMedium};
    }
    & input {
      width: 180px;
      margin-left: 30px;
      padding-left: 20px;
      background-color: transparent;
      border: none;
      border-bottom: 2px dotted black;
      font-size: ${dimensions.textSizeSmallText};
      height: ${dimensions.lineHeightSmallText};
    }
  }

  & .register-button-container {
    width: 100%;
    position: relative;
    height: 75px;
    display: flex;
    justify-content: end;

    & .submit-button {
      font-size: ${dimensions.textSizeMedium};
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
      font-size: ${dimensions.textSizeSmallText};
      width: 135px;
      visibility: hidden;
      &--true {
        visibility: visible;
      }
    }
  }

  & .register-form__success {
    box-shadow: 0 0 2px grey;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 325px;
    background-color: azure;
    & > * {
      margin-top: 15px;
      text-align: center;
    }
    & h3 {
      width: min-content;
      font-size: 35px;
      line-height: 40px;
      color: darkred;
    }
    & p {
      text-align: center;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      display: block;
      height: 12px;
      width: 100%;
      background: #cb5a5e;
      background: repeating-linear-gradient(
        -45deg,
        #cb5a5e,
        #cb5a5e 12px,
        transparent 10px,
        transparent 23px
      );
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-bottom: 0;
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }
  }
`;

export const StyledRegisterContainer = styled.main`
  display: flex;
  flex-direction: column;
  font-size: ${dimensions.textSizeMedium};

  @media (min-width: 715px) {
    align-items: center;
    & > div {
      min-width: 550px;
      & > nav > ul {
      }
    }
  }

  & > div {
    & > nav > ul {
      list-style: none;
      display: flex;
      color: black;
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

        & a,
        a:hover,
        a:visited {
          color: black;
        }
      }
    }
  }
`;

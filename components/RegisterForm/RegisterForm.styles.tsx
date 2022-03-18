import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  padding: 20px;
  position: relative;
  background-color: ${(props) => props.theme.softGreen};
  box-shadow: 3px 3px 3px grey;
  box-shadow: 0 0 15px grey;

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
`;

export const StyledRegisterContainer = styled.main`
  display: flex;
  flex-direction: column;
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
      }
      &--register {
        background-color: ${(props) => props.theme.softGreen};
        z-index: 50;
        box-shadow: 0 0 15px grey;
        clip-path: inset(-15px -15px 0 -15px);
      }
      & a:visited {
        color: black;
        font-size: ${(props) => props.theme.textSizeMedium};
      }
    }
  }
`;

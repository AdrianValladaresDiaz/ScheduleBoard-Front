import styled from "styled-components";

const StyledSpinner = styled.div`
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  width: 90%;
  height: 90%;
  position: absolute;
  size: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
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

  & > div {
    animation: rotating 3.5s linear infinite;
    width: 120px;
    height: 120px;
    margin: 40px auto;
    position: relative;
    color: red;
    text-align: center;
    border: 4px solid ${(props) => props.theme.accent};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before,
    :after {
      content: "";
      border: 4px solid ${(props) => props.theme.accent};
      border-radius: 30px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: -4px;
      left: -4px;
    }
    &:before {
      transform: rotate(30deg);
    }
    &:after {
      transform: rotate(60deg);
    }
  }
`;

const Spinner = (): JSX.Element => {
  return (
    <StyledSpinner>
      <div>
        <span>loading...</span>
      </div>
    </StyledSpinner>
  );
};

export default Spinner;

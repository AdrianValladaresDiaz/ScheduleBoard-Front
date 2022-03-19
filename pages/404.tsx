import { useEffect, useState } from "react";
import styled from "styled-components";

const Styled404 = styled.main`
  background-color: ${(props) => props.theme.accent};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 80px;
  }
  & .falling {
    display: flex;
    justify-content: space-between;
    top: -100px;
    width: 150px;
    transform: translateX(-50px);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.1);

    &--true {
      transform: translateY(calc(50vh + 100px)) translateX(-50px);
    }
  }

  & .fade-in {
    animation: fadeIn linear 2s;
    font-size: 25px;
    left: 0;
    width: 100vw;
    text-align: center;
    transform: translateY(125px) translateX(20px);
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      75% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const NotFoundPage = (): JSX.Element => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 750);
  });

  return (
    <Styled404>
      <span className={`falling falling--${active}`}>
        <span>4</span>
        <span>4</span>
      </span>
      <span>Ö</span>
      <span className="fade-in">this page does not exist</span>
    </Styled404>
  );
};

export default NotFoundPage;

import type { NextPage } from "next";
import styled from "styled-components";

const StyledP = styled.article`
  font-family: ${(props) => props.theme.logoFont};
`;

const Home: NextPage = () => {
  return (
    <div>
      <StyledP>hola</StyledP>
    </div>
  );
};

export default Home;

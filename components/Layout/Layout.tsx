import Head from "next/head";
import { FunctionComponent } from "react";
import styled from "styled-components";
import dimensions from "../../styles/dimensions";
import NavigationBar from "../NavigationBar/NavigationBar";

const Background = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.background};
  z-index: -1;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  padding-top: ${dimensions.headerHeight};
  padding-left: ${dimensions.lateralPadding};
  padding-right: ${dimensions.lateralPadding};
  margin-top: calc((${dimensions.lateralPadding}) + 15px);
  @media (min-width: 715px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Layout: FunctionComponent = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Schedule Board</title>
        <meta name="description" content="like trello but prettier" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Background />
      <NavigationBar />
      <StyledMain className="main-container">
        <StyledContainer>{children}</StyledContainer>
      </StyledMain>
    </>
  );
};

export default Layout;

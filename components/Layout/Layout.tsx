import Head from "next/head";
import { FunctionComponent } from "react";
import styled from "styled-components";
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
      {children}
    </>
  );
};

export default Layout;
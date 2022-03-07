import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Schedule Board</title>
        <meta name="description" content="like trello but prettier" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </div>
  );
};

export default Home;

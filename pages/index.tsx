import type { NextPage } from "next";
import Head from "next/head";
import { CardStack } from "../components/cards";
import { Layout } from "../components/layout";
import { Title } from "../components/title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Title>Panda says hi 🐼</Title>
        <CardStack />
      </Layout>
    </>
  );
};

export default Home;

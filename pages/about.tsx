import { NextPage } from "next";
import Head from "next/head";
import { AboutContent } from "../components/about-content";
import { Layout } from "../components/layout";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Ondřej Pešička</title>
        <meta
          name="description"
          content="Ondřej Pešička is a professional product designer based in Prague, Czechia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AboutContent />
      </Layout>
    </>
  );
};

export default About;

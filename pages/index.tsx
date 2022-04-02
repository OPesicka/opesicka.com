import type { NextPage } from "next";
import Head from "next/head";
import { FeaturedPosts } from "../components/featured-posts";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ondřej Pešička</title>
        <meta
          name="description"
          content="Ondřej Pešička is a professional product designer based in Prague, Czechia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero></Hero>
        <FeaturedPosts></FeaturedPosts>
      </Layout>
    </>
  );
};

export default Home;

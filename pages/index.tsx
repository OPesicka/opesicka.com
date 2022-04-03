import type { NextPage } from "next";

import { FeaturedPosts } from "../components/featured-posts";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />

      <Layout>
        <Hero></Hero>
        <FeaturedPosts></FeaturedPosts>
      </Layout>
    </>
  );
};

export default Home;

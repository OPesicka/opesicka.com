import type { NextPage } from "next";

import { FeaturedWork } from "../components/featured-posts";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { featuredWork } from "../res/content";

const Home: NextPage = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />

      <Layout>
        <Hero />
        <FeaturedWork />
      </Layout>
    </>
  );
};

export default Home;

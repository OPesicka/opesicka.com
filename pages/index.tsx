import type { NextPage } from "next";
import styled from "styled-components";

import { FeaturedWork } from "../components/featured-posts";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { featuredWork, featuredWriting } from "../res/content";

const Home: NextPage = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />

      <Layout>
        <Hero />
        <Container>
          <FeaturedWork title="Work" content={featuredWork} />
          <FeaturedWork title="Writing" content={featuredWriting} />
        </Container>
      </Layout>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-top: 120px;
`;

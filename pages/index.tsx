import type { NextPage } from "next";
import styled from "styled-components";

import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { Projects } from "../components/projects";

const Home: NextPage = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />

      <Layout>
        <Hero />
        <Container>
          <Projects />
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

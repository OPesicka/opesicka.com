import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { AboutContent } from "../components/about-content";
import { Header } from "../components/header";
import { Layout } from "../components/layout";

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About | Ondřej Pešička" />
      <link rel="icon" href="/favicon.ico" />

      <Layout>
        <Header />
        <AboutContent />
      </Layout>
    </>
  );
};

export default About;

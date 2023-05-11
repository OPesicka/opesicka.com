import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { AboutContent } from "../components/about/about-content";
import { Layout } from "../components/layout";

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About | Ondřej Pešička" />
      <link rel="icon" href="/favicon.ico" />

      <Layout>
        {/* TODO: add some way to get back to home */}
        <AboutContent />
      </Layout>
    </>
  );
};

export default About;

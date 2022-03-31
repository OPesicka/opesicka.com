import { NextPage } from "next";
import { AboutContent } from "../components/about-content";
import { Layout } from "../components/layout";

const About: NextPage = () => {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
};

export default About;

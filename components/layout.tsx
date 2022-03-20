import { FC } from "react";
import styled from "styled-components";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout: FC = (props) => {
  return (
    <>
      <Header />
      <SDiv>{props.children}</SDiv>
      <Footer />
    </>
  );
};

const SDiv = styled.main`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: 960px;
`;

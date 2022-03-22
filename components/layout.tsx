import { FC } from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../theme/theme";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout: FC = (props) => {
  return (
    <>
      <SLayout>
        <Header />
        <SDiv>{props.children}</SDiv>
        <Footer />
      </SLayout>
    </>
  );
};

const SDiv = styled.main`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const SLayout = styled.div`
  max-width: 960px;
  padding: 0 40px;
  margin: auto;
  ${breakpoint(
    "mobile",
    "down",
    css`
      padding: 0 40px;
    `
  )}
`;

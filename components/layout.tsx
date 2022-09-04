import { FC } from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../theme/theme";
import { Footer } from "./footer";

export const Layout: FC = (props) => {
  return (
    <>
      <SLayout>
        <Container>{props.children}</Container>
        <Footer />
      </SLayout>
    </>
  );
};

const Container = styled.main`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const SLayout = styled.div`
  max-width: 720px;
  padding: 0 64px;
  margin: auto;
  ${breakpoint(
    "mobile",
    "down",
    css`
      padding: 0 32px;
    `
  )}
`;

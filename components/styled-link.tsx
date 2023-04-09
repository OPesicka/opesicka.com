import { ReactNode } from "react";
import styled from "styled-components";
import { semanticColor, text } from "../theme/theme";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "white" | "primary";
  rel?: string;
  target?: string;
};

export const StyledLink = (props: Props) => {
  return <SLink {...props}>{props.children}</SLink>;
};

const SLink = styled.a<Props>`
  ${text("textStrong")};
  color: ${semanticColor("neutral.text")};
  text-decoration: underline;
  transition: all 160ms;
  :hover {
    color: ${semanticColor("neutral.textSubtle")};
  }
`;

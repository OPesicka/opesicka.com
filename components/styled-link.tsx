import { ReactNode } from "react";
import styled from "styled-components";
import { color, text } from "../theme/theme";

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
  color: ${(props) => color(props.variant === "primary" ? "primary.400" : "neutral.50")};
  text-decoration: none;
  transition: all 160ms;
  :hover {
    color: ${color("primary.500")};
    color: ${(props) => color(props.variant === "white" ? "neutral.200" : "primary.500")};
  }
`;

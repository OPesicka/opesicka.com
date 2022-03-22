import { ReactNode } from "react";
import styled from "styled-components";
import { color, text } from "../theme/theme";

type Props = {
  href?: string;
  children: ReactNode;
};

export const StyledLink = (props: Props) => {
  return <SLink {...props}>{props.children}</SLink>;
};

//TODO rewrite this according to use const SLink = styled(Text)

const SLink = styled.a`
  ${text("textStrong")};
  color: ${color("neutral.50")};
  text-decoration: none;
  transition: all 120ms;
  :hover {
    color: ${color("primary.500")};
  }
`;

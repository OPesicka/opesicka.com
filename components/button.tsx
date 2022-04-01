import { ReactNode } from "react";
import styled from "styled-components";
import { color, text } from "../theme/theme";

type Props = {
  href: string;
  children: ReactNode;
  rel?: string;
};

export const Button = (props: Props) => {
  return (
    <SLink href={props.href} rel={props.rel}>
      <SButton>{props.children}</SButton>
    </SLink>
  );
};

const SButton = styled.div`
  background: ${color("primary.600")};
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  transition: 160ms;
  cursor: pointer;
  width: auto;

  :hover {
    background: ${color("primary.500")};
  }
`;

const SLink = styled.a`
  ${text("footnoteStrong")}
  color: ${color("neutral.0")};
  text-decoration: none;
  margin-top: 24px;
`;
